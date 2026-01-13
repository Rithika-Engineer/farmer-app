import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  titleTamil: {
    type: String,
    trim: true
  },
  link: {
    type: String,
    required: true,
    trim: true
  },
  embedLink: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['farming', 'fertilizer', 'irrigation', 'pest', 'general']
  },
  thumbnail: {
    type: String
  }
}, {
  timestamps: true
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
