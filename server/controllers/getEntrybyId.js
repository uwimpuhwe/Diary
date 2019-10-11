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



 const getOne = (req, res)=> {
  try {
    let foundEntry = diaryEntry.find(function (a) {
        return a.id === parseInt(req.params.id); 
     });
    if (foundEntry) {
      res.status(200).json({
          status : 200,
          entry: foundEntry
      });
  } 
 else {
      res.status(404).json({
          status : 404,
          message: 'entry of that Id does not exist'
      })

    }
};



export default allEntries;