import express from 'express';
import {
  getChatHistory,
  addMessage,
  clearChat
} from '../controllers/chatController.js';

const router = express.Router();

router.get('/:userId', getChatHistory);
router.post('/:userId', addMessage);
router.delete('/:userId', clearChat);

export default router;
