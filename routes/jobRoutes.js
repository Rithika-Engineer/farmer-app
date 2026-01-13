import express from 'express';
import {
  getAllJobs,
  getJobsByCategory,
  getJob,
  createJob,
  updateJob
} from '../controllers/jobController.js';

const router = express.Router();

router.get('/', getAllJobs);
router.get('/category/:category', getJobsByCategory);
router.get('/:id', getJob);
router.post('/', createJob);
router.put('/:id', updateJob);

export default router;
