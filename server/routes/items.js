import express from 'express';
import allEntries from '../controllers/getAll';
import getOne from '../controllers/getEntrybyId';


const router = express.Router();

router.get('/api/v1/entries', allEntries);
router.get('/api/v1/entries/:id', getOne);


export default router;
