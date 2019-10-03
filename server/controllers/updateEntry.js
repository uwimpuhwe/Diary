import diaryEntry from '../models/entryModel';


const modifyEntry = (req, res) => {
  const findId = diaryEntry.find(a => a.id === parseInt(req.params.id));
  if(findId) {
    findId.title = req.body.title;
    return res.status(200).json({
      status: 200,
      message: 'entry updated successfully',
      data: {
        id: findId.id,
        created_on: new Date(),
        title: findId.title
      }
    });

  }
  else{
    return res.status(404).json({
      status:404,
      message:'NOT FOUND'
    })
  }
};

export default modifyEntry;