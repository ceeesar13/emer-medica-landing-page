import { Router } from 'express';
import { submitLead } from '../controllers/leadController';
import { validateLeadData } from '../middleware/validation';
import { validateSecretKey } from '../middleware/auth';

const router = Router();

router.post('/lead', validateLeadData, submitLead);

export default router; 