import validationsignup from '../helper/validatesignup';
import validatesignin from '../helper/validatelogin';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { pool } from '../db';
const addUser = async(req, res) => {
const { error } = validationsignup.validation(req.body);
   if (error) {
       return res.status(400).json({ status: 400, error: error.details[0].message });
   }
   const etaken = req.body.email;
   const findemail = 'SELECT * FROM users WHERE email= $1';
   const user = await pool.query(findemail, [etaken]);
   if (user.rows[0]) {
       return res.status(400).send({
           status: 400,
           message: 'Email exist',
       });
   }
//    else{
//     return res.status(404).send({
//         status: 404,
//         message: 'wrong email',
//     }); 
//    }
   const hash = bcrypt.hashSync(req.body.password.trim(), 10);
   const hashcp = bcrypt.hashSync(req.body.confirm_password.trim(), 10);
   let newItem = {
    first_name: req.body.first_name,
    second_name: req.body.second_name,
    email: req.body.email,
    username: req.body.username,
    password: hash,
    confirm_password : hashcp
   };
   const query = 'INSERT INTO users(first_name,second_name,email,username,password,confirm_password) VALUES($1,$2,$3,$4,$5,$6) RETURNING *';
   const values = [newItem.first_name,newItem.second_name, newItem.email, newItem.username, newItem.password, newItem.confirm_password];
   const result = await pool.query(query, values);
   const { userid, first_name,second_name, email, username, password,confirm_password  } = result.rows[0];
   const payload = { userid, first_name,second_name, email, username,password,confirm_password }
   const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1year' });
   return res.status(201).send({
       status: 201,
       message: ' Successfully inserted',
       token,
       data: result.rows[0],
   });
};
const signin = async(req, res) => {
   const { error } = validatesignin.validation(req.body);
   if (error) {
       return res.status(400).json({ status: 400, error: error.details[0].message });
   }
   const etaken = req.body.email;
   const findemail = 'SELECT * FROM users WHERE email= $1';
   const {
       rows
   } = await pool.query(findemail, [etaken]);
   if (!rows[0]) {
       return res.status(400).send({
           status: 400,
           message: 'wrong email or password',
       });
   }
   const password = bcrypt.compareSync(req.body.password.trim(), rows[0].password);
   if (!password) {
       return res.status(400).send({
           status: 400,
           message: 'wrong email or password',
       });
   }
   const { userid,first_name,second_name,email,username } = rows[0];      
   const payload = { userid,first_name,second_name,email,username }
   const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1year' });
   return res.status(200).send({
       status: 200,
       message: ' Successfully login ',
       token,
       data: rows[0],
   });
}
export { addUser, signin };