import express from 'express';
import { createRequest } from '../controllers/requestController';

const router = express.Router();

router.post('/add_request', createRequest);

export default router;