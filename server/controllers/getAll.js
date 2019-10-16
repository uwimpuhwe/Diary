
import { pool } from '../db';
 const allEntries= async (req, res)=> {
  
    const query = 'SELECT * FROM entry;';
    pool.query(query, (error, result) => {
    
    res.status(200).json({
        status : 200,
        message : "found",
        entry: result.rows,
    });
    
  });

 };
  export default allEntries;