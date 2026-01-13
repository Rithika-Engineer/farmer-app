import mongoose from 'mongoose';

const marketPriceSchema = new mongoose.Schema({
  crop: {
    type: String,
    required: true,
    trim: true
  },
  district: {
    type: String,
    required: true,
    trim: true
  },
  minPrice: {
    type: Number,
    required: true
  },
  maxPrice: {
    type: Number,
    required: true
  },
  averagePrice: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  weeklyTrend: [{
    price: Number,
    date: Date
  }],
  monthlyTrend: [{
    price: Number,
    date: Date
  }]
}, {
  timestamps: true
});

// Index for faster queries
marketPriceSchema.index({ crop: 1, district: 1 });

const MarketPrice = mongoose.model('MarketPrice', marketPriceSchema);

export default MarketPrice;
