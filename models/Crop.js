import mongoose from 'mongoose';

const cropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  nameTamil: {
    type: String,
    trim: true
  },
  season: {
    type: String,
    required: true,
    enum: ['kharif', 'rabi', 'summer']
  },
  soil: {
    type: String,
    required: true
  },
  water: {
    type: String,
    required: true,
    enum: ['High', 'Medium', 'Low']
  },
  days: {
    type: String,
    required: true
  },
  gains: {
    type: String,
    required: true
  },
  next: {
    type: String,
    required: true
  },
  tip: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Index for faster queries
cropSchema.index({ season: 1 });

const Crop = mongoose.model('Crop', cropSchema);

export default Crop;
