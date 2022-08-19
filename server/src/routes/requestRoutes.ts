import express from 'express';
import { createRequest } from '../controllers/requestController';

const router = express.Router();

router.post('/addRequest', createRequest);

export default router;