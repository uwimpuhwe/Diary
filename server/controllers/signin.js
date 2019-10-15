import validation from '../validate/uservalidation';
import validatesignin from '../validate/loginvalidation';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { pool } from '../config/connect';
const addUser = async(req, res) => {
   const { error } = validation.validate(req.body);
   if (error) {
       return res.status(400).json({ status: 400, error: error.details[0].message });
   }
   const etaken = req.body.Email;
   const findemail = 'SELECT * FROM signup WHERE Email= $1';
   const user = await pool.query(findemail, [etaken]);
   if (user.rows[0]) {
       return res.status(400).send({
           status: 400,
           message: 'Email exist',
       });
   }
   const hash = bcrypt.hashSync(req.body.Password.trim(), 10);
   let newItem = {
       Allnames: req.body.Allnames,
       Email: req.body.Email,
       Username: req.body.Username,
       Password: hash
   };
   const query = 'INSERT INTO signup(allnames,email,username,password) VALUES($1,$2,$3,$4) RETURNING *';
   const values = [newItem.Allnames, newItem.Email, newItem.Username, newItem.Password];
   const result = await pool.query(query, values);
   const { id, allnames, email, username, password } = result.rows[0];
   const payload = { id, allnames, email, username }
   const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1year' });
   return res.status(201).send({
       status: 201,
       message: 'user inserted Successfully ',
       token,
       data: result.rows[0],
   });
};
const signin = async(req, res) => {
   const { error } = validatesignin.validate(req.body);
   if (error) {
       return res.status(400).json({ status: 400, error: error.details[0].message });
   }
   const etaken = req.body.Email;
   const findemail = 'SELECT * FROM signup WHERE Email= $1';
   const {
       rows
   } = await pool.query(findemail, [etaken]);
   if (!rows[0]) {
       return res.status(400).send({
           status: 400,
           message: 'incorrect email or password',
       });
   }
   const password = bcrypt.compareSync(req.body.Password.trim(), rows[0].password);
   if (!password) {
       return res.status(400).send({
           status: 400,
           message: 'incorrect email or password',
       });
   }
   const { id, allnames, Email, username } = rows[0];
   const payload = { id, allnames, Email, username }
   const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1year' });
   return res.status(200).send({
       status: 200,
       message: 'you login Successfully ',
       token,
       data: rows[0],
   });
}
export { addUser, signin };