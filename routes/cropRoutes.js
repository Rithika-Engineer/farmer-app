import express from 'express';
import {
  getAllCrops,
  getCropsBySeason,
  getCrop,
  createCrop,
  updateCrop
} from '../controllers/cropController.js';

const router = express.Router();

router.get('/', getAllCrops);
router.get('/season/:season', getCropsBySeason);
router.get('/:id', getCrop);
router.post('/', createCrop);
router.put('/:id', updateCrop);

export default router;
