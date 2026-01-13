import express from 'express';
import {
  getAllVideos,
  getVideo,
  createVideo,
  updateVideo
} from '../controllers/videoController.js';

const router = express.Router();

router.get('/', getAllVideos);
router.get('/:id', getVideo);
router.post('/', createVideo);
router.put('/:id', updateVideo);

export default router;
