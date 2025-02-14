import { Router } from 'express';
import {
  createTestProfile,
  getAllProfiles,
  login,
  register,
} from './controllers';

const router = Router();

router.post('/login', login);
router.post('/register', register);

router.post('/create', createTestProfile);
router.get('/profiles', getAllProfiles);

export default router;
