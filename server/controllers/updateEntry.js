import diaryEntry from '../models/entryModel';


const modifyEntry= (res,req)=>{
 const found = diaryEntry.find(function (a) {
 return a.id === parseInt(req.params.id);
});

  if (found){
  const update = {
      id: found.id,
      title: req.body.title
    };
    let Index = diaryEntry.indexOf(found);
    diaryEntry.splice(Index, 1, update);

    return res.status(202).json({
        status :202,
        message:'already updated',
    });
    
  }
};

export default modifyEntry;