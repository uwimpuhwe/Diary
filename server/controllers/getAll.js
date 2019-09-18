import diaryEntry from '../models/entryModel';

 const allEntries= (req, res)=> {
    res.status(200).json({
        status : 200,
        entry : diaryEntry,
    })
  };
  export default allEntries;