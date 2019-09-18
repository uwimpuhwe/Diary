import express from 'express';
import allEntries from '../controllers/getAll';


const router = express.Router();

router.get('/api/v1/entries', allEntries);


export default router;
