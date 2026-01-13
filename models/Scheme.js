import mongoose from 'mongoose';

const schemeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  titleTamil: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  descriptionTamil: {
    type: String
  },
  url: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['insurance', 'subsidy', 'loan', 'training', 'other']
  },
  icon: {
    type: String,
    default: '🌾'
  }
}, {
  timestamps: true
});

const Scheme = mongoose.model('Scheme', schemeSchema);

export default Scheme;
