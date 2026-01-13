import Crop from '../models/Crop.js';

// Get all crops
export const getAllCrops = async (req, res) => {
  try {
    const { season } = req.query;
    
    let query = {};
    if (season) query.season = season;
    
    const crops = await Crop.find(query).sort({ name: 1 });
    res.json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get crop by season
export const getCropsBySeason = async (req, res) => {
  try {
    const { season } = req.params;
    
    if (!['kharif', 'rabi', 'summer'].includes(season)) {
      return res.status(400).json({ message: 'Invalid season' });
    }
    
    const crops = await Crop.find({ season }).sort({ name: 1 });
    res.json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single crop
export const getCrop = async (req, res) => {
  try {
    const { id } = req.params;
    const crop = await Crop.findById(id);
    
    if (!crop) {
      return res.status(404).json({ message: 'Crop not found' });
    }
    
    res.json(crop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create crop
export const createCrop = async (req, res) => {
  try {
    const crop = new Crop(req.body);
    await crop.save();
    res.status(201).json({ message: 'Crop created successfully', crop });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update crop
export const updateCrop = async (req, res) => {
  try {
    const { id } = req.params;
    const crop = await Crop.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!crop) {
      return res.status(404).json({ message: 'Crop not found' });
    }
    
    res.json({ message: 'Crop updated successfully', crop });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
