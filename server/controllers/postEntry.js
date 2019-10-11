
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

import diaryEntry from '../models/entryModel';
import validate from '../helpers/validationEntry';

const postNew = (req, res) => {
  const { error } = validate.validation(req.body);
  if (error) {
    return res.status(400).json({ status: 400, error: error.details[0].message });
  }
  const Ids = diaryEntry.map(item => item.id);
  const newId = Ids.length + 1;
  const newItem = {
    id: newId,
    title: req.body.title,
    detail: req.body.detail,
    createdOn: new Date()
  };
  diaryEntry.push(newItem);

  res.status(201).json({
    status: 201,
    message: 'entry successfully posted',
    data: newItem
  });

    const result = await pool.query(query, values);
    return res.status(201).send({
        status: 201,
        message: 'Successful insert',
        data: result.rows[0],
    });
};


export default postNew;