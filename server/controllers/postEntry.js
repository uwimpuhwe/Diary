import diaryEntry from '../models/entryModel';

const postNew =(req, res) => {
 const Ids = diaryEntry.map(item => item.id);
 const newId = Ids.length +1  ;
  const newItem = {
    id: newId,
    title: req.body.title,
    detail:req.body.detail,
    createdOn: new Date()
  };
  diaryEntry.push(newItem);
 
    res.status(201).json({
        status : 201,
        message : 'entry successfully posted',
        data : newItem
    });

};
export default postNew;