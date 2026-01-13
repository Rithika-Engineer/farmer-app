import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  messages: [{
    from: {
      type: String,
      enum: ['user', 'bot'],
      required: true
    },
    text: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

// Index for faster queries
chatSchema.index({ userId: 1 });

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;
