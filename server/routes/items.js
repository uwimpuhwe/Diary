import express from 'express';
import allEntries from '../controllers/getAll';
import getOne from '../controllers/getEntrybyId';
import postNew from '../controllers/postEntry';
import modifyEntry from '../controllers/updateEntry';


const router = express.Router();

router.get('/api/v1/entries', allEntries);
router.get('/api/v1/entries/:id', getOne);
router.post('/api/v1/entries', postNew);
router.put('/api/v1/entries/:id', modifyEntry);


export default router;
