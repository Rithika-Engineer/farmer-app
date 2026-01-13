import Scheme from '../models/Scheme.js';

// Get all schemes
export const getAllSchemes = async (req, res) => {
  try {
    const schemes = await Scheme.find().sort({ createdAt: -1 });
    res.json(schemes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single scheme
export const getScheme = async (req, res) => {
  try {
    const { id } = req.params;
    const scheme = await Scheme.findById(id);
    
    if (!scheme) {
      return res.status(404).json({ message: 'Scheme not found' });
    }
    
    res.json(scheme);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create scheme
export const createScheme = async (req, res) => {
  try {
    const scheme = new Scheme(req.body);
    await scheme.save();
    res.status(201).json({ message: 'Scheme created successfully', scheme });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update scheme
export const updateScheme = async (req, res) => {
  try {
    const { id } = req.params;
    const scheme = await Scheme.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!scheme) {
      return res.status(404).json({ message: 'Scheme not found' });
    }
    
    res.json({ message: 'Scheme updated successfully', scheme });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
