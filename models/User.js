import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  farmerName: {
    type: String,
    required: true,
    trim: true
  },
  village: {
    type: String,
    trim: true
  },
  land: {
    type: String,
    trim: true
  },
  crop: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  language: {
    type: String,
    default: 'en',
    enum: ['en', 'ta']
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
