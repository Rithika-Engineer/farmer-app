import mongoose from 'mongoose';

const pestControlSchema = new mongoose.Schema({
  pestName: {
    type: String,
    required: true,
    trim: true
  },
  pestNameTamil: {
    type: String,
    trim: true
  },
  crop: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  descriptionTamil: {
    type: String
  },
  solution: {
    type: String,
    required: true
  },
  solutionTamil: {
    type: String
  },
  organicRemedy: {
    type: String
  },
  organicRemedyTamil: {
    type: String
  }
}, {
  timestamps: true
});

// Index for faster queries
pestControlSchema.index({ crop: 1 });

const PestControl = mongoose.model('PestControl', pestControlSchema);

export default PestControl;
