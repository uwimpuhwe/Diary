import diaryEntry from '../models/entryModel';


const modifyEntry = (res, req) => {
  const findId = diaryEntry.find(a=>a.id === parseInt(req.params.id));
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
};

export default modifyEntry;