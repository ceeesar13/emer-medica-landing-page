import { Router } from 'express';
import { submitLead } from '../controllers/leadController';
import { validateLeadForm } from '../middleware/validation';

const router = Router();

router.post('/lead', validateLeadForm, submitLead);

export default router; 