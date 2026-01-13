import MarketPrice from '../models/MarketPrice.js';

// Get market prices
export const getMarketPrices = async (req, res) => {
  try {
    const { crop, district } = req.query;
    
    let query = {};
    if (crop) query.crop = crop;
    if (district) query.district = district;
    
    const prices = await MarketPrice.find(query).sort({ date: -1 });
    res.json(prices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get price by crop and district
export const getPriceByCropAndDistrict = async (req, res) => {
  try {
    const { crop, district } = req.params;
    
    const price = await MarketPrice.findOne({ 
      crop: crop, 
      district: district 
    }).sort({ date: -1 });
    
    if (!price) {
      return res.status(404).json({ message: 'Price not found' });
    }
    
    res.json(price);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create or update market price
export const createOrUpdatePrice = async (req, res) => {
  try {
    const { crop, district, minPrice, maxPrice, weeklyTrend, monthlyTrend } = req.body;
    
    const averagePrice = (minPrice + maxPrice) / 2;
    
    const price = await MarketPrice.findOneAndUpdate(
      { crop, district },
      {
        crop,
        district,
        minPrice,
        maxPrice,
        averagePrice,
        weeklyTrend: weeklyTrend || [],
        monthlyTrend: monthlyTrend || [],
        date: new Date()
      },
      { upsert: true, new: true }
    );
    
    res.status(200).json({ 
      message: 'Price saved successfully',
      price 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get top district for a crop
export const getTopDistrict = async (req, res) => {
  try {
    const { crop } = req.params;
    
    const topPrice = await MarketPrice.findOne({ crop })
      .sort({ maxPrice: -1 })
      .limit(1);
    
    if (!topPrice) {
      return res.status(404).json({ message: 'No prices found for this crop' });
    }
    
    res.json({
      district: topPrice.district,
      price: topPrice.maxPrice
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
