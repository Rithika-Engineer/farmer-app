import express from 'express';
import {
  getAllSchemes,
  getScheme,
  createScheme,
  updateScheme
} from '../controllers/schemeController.js';

const router = express.Router();

router.get('/', getAllSchemes);
router.get('/:id', getScheme);
router.post('/', createScheme);
router.put('/:id', updateScheme);

export default router;
