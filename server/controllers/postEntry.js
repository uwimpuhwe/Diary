import validation from '../helper/validation';
import { pool } from '../db';

const postNew = async(req, res) => {


    const { error } = validation.validation(req.body);
    if (error) {
        return res.status(400).json({ status: 400, error: error.details[0].message });
    }
    const created_on = new Date();

    let postNew = {
        // entryId: req.body.id,
        title: req.body.title,
        detail: req.body.detail,
    };
    const query = 'INSERT INTO entry(entry_title,entry_detail,created_on) VALUES($1,$2,$3) RETURNING *';
    const values = [postNew.title, postNew.detail, created_on];

    const result = await pool.query(query, values);
    return res.status(201).send({
        status: 201,
        message: 'Successful insert',
        data: result.rows[0],
    });
};


export default postNew;