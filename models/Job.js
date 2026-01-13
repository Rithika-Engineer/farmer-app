import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  education: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  pay: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['edu', 'gen'],
    required: true
  },
  contactInfo: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for faster queries
jobSchema.index({ category: 1, isActive: 1 });

const Job = mongoose.model('Job', jobSchema);

export default Job;
