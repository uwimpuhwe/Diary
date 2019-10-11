import diaryEntry from '../models/entryModel';
import validate from '../helpers/validationEntry';


const modifyEntry = (req, res) => {
  const { error } = validate.validation(req.body);
  if (error) {
    return res.status(400).json({ status: 400, error: error.details[0].message });
  }
  const findId = diaryEntry.find(a => a.id === parseInt(req.params.id));
  if (findId) {
    findId.title = req.body.title;
    findId.detail = req.body.detail;
    return res.status(200).json({
      status: 200,
      message: 'entry updated successfully',
      data: {
        id: findId.id,
        created_on: new Date(),
        title: findId.title,
        detail: findId.detail
      }
    });
  }
  else {
    return res.status(404).json({
      status: 404,
      message: 'NOT FOUND'
    })
  }
};

export default modifyEntry;