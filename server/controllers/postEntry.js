import diaryEntry from '../models/entryModel';
import validate from '../helpers/validationEntry';

const postNew = (req, res) => {
  const { error } = validate.validation(req.body);
  if (error) {
    return res.status(400).json({ status: 400, error: error.details[0].message });
  }
  const Ids = diaryEntry.map(item => item.id);
  const newId = Ids.length + 1;
  const newItem = {
    id: newId,
    title: req.body.title,
    detail: req.body.detail,
    createdOn: new Date()
  };
  diaryEntry.push(newItem);

  res.status(201).json({
    status: 201,
    message: 'entry successfully posted',
    data: newItem
  });

};
export default postNew;