import { pool } from '../db';

const allEntries = async(req, res) => {
    const id = parseInt(req.params.id, 10);
    const values = [id];
    const query = 'SELECT * FROM entry WHERE id=$1;';

    const result = await pool.query(query, values);
    if (result.rows < '1') {
        res.status(404).send({
            status: 404,
            message: 'No Entries found',

        });
    } else {
        return res.status(200).send({
        
            entry: result.rows,
        });

    }
};



export default allEntries;