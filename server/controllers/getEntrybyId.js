import diaryEntry from '../models/entryModel';

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
  if(!foundEntry) {
      res.status(404).json({
          status : 404,
          message: 'entry of that Id does not exist'
      })
    }
} catch (error) {
    res.status(500).json({
        status : 500,
        error : 'server' 
    })
  }
}
export default getOne;