import express from 'express';
import {
  getAllPestControls,
  getPestControlByCrop,
  getPestControl,
  createPestControl,
  updatePestControl
} from '../controllers/pestControlController.js';

const router = express.Router();

router.get('/', getAllPestControls);
router.get('/crop/:crop', getPestControlByCrop);
router.get('/:id', getPestControl);
router.post('/', createPestControl);
router.put('/:id', updatePestControl);

export default router;
