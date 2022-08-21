import express from 'express';
import { createAgents, deleteAgent, getAgentById, getAllAgents, updateAgent } from '../controllers/agentController';
import validateAgent from '../utils/agentValidation';
import {isAthenticated} from '../controllers/middleware/isAthenticated';


const router = express.Router();

router.post('/addAgent', validateAgent, createAgents);
router.get('/agents', validateAgent, getAllAgents);
router.get('/club', validateAgent, getAgentById);
router.put('/updateAgent', validateAgent, updateAgent);
router.delete('/deleteAgent', validateAgent, deleteAgent);




export default router;