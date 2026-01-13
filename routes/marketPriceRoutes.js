import express from 'express';
import {
  getMarketPrices,
  getPriceByCropAndDistrict,
  createOrUpdatePrice,
  getTopDistrict
} from '../controllers/marketPriceController.js';

const router = express.Router();

router.get('/', getMarketPrices);
router.get('/top/:crop', getTopDistrict);
router.get('/:crop/:district', getPriceByCropAndDistrict);
router.post('/', createOrUpdatePrice);

export default router;
