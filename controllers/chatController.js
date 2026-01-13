import Chat from '../models/Chat.js';

// Get chat history
export const getChatHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    
    let chat = await Chat.findOne({ userId });
    
    if (!chat) {
      // Create new chat if doesn't exist
      chat = new Chat({ userId, messages: [] });
      await chat.save();
    }
    
    res.json(chat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add message to chat
export const addMessage = async (req, res) => {
  try {
    const { userId } = req.params;
    const { from, text } = req.body;
    
    let chat = await Chat.findOne({ userId });
    
    if (!chat) {
      chat = new Chat({ userId, messages: [] });
    }
    
    chat.messages.push({
      from,
      text,
      timestamp: new Date()
    });
    
    await chat.save();
    
    res.status(200).json({ 
      message: 'Message added successfully',
      chat 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Clear chat history
export const clearChat = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const chat = await Chat.findOne({ userId });
    
    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }
    
    chat.messages = [];
    await chat.save();
    
    res.json({ message: 'Chat cleared successfully', chat });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
