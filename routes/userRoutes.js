import express from 'express';
import {
  getUserProfile,
  createOrUpdateProfile,
  getAllUsers
} from '../controllers/userController.js';

const router = express.Router();

router.get('/:userId', getUserProfile);
router.post('/', createOrUpdateProfile);
router.get('/', getAllUsers);

export default router;
