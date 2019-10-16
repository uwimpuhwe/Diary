
import { pool } from '../db';
import validation from '../helper/validation';
const modifyEntry = async(req, res) => {
  const { error } = validation.validation(req.body);
    if (error) {
        return res.status(400).json({ status: 400, error: error.details[0].message });
    }
    // const created_on = new Date();
    let modifyEntry= {
      // entryId: req.body.id,
      title: req.body.title,
      description: req.body.description,
  };
  const id = parseInt(req.params.id);
    // const values = [id];
  // const findId = 'SELECT * FROM entry WHERE id=$1;';
  const query = 'UPDATE entry SET entry_title=$1,entry_detail=$2 WHERE id=$3 RETURNING *;';
  const values = [modifyEntry.title, modifyEntry.description, id];

    const result = await pool.query(query, values);
    return res.status(201).send({
        status: 201,
        message: 'Successful update',
        data: result.rows[0],
    });

};
export default modifyEntry;