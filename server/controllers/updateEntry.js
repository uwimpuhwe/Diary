import { pool } from '../db';
import validation from '../helper/validation';
const modifyEntry = async(req, res) => {
  const { error } = validation.validation(req.body);
    if (error) {
        return res.status(400).json({ status: 400, error: error.details[0].message });
    }
    const created_on = new Date();
    let modifyEntry= {
      // entryId: req.body.id,
      title: req.body.title,
      detail: req.body.detail,
  };
  const id = parseInt(req.params.id, 10);
    const values = [id];
  const findId = 'SELECT * FROM entry WHERE id=$1;';
  const query = 'UPDATE entry SET (entry_title,entry_detail,created_on) ';
    // const values = [modifyEntry.title, modifyEntry.detail, created_on];

    const result = await pool.query(query, values);
    return res.status(201).send({
        status: 201,
        message: 'Successful insert',
        data: result.rows[0],
    });
};
export default modifyEntry;