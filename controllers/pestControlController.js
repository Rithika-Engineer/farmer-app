import PestControl from '../models/PestControl.js';

// Get all pest controls
export const getAllPestControls = async (req, res) => {
  try {
    const { crop } = req.query;
    
    let query = {};
    if (crop) query.crop = crop;
    
    const pestControls = await PestControl.find(query).sort({ pestName: 1 });
    res.json(pestControls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get pest control by crop
export const getPestControlByCrop = async (req, res) => {
  try {
    const { crop } = req.params;
    const pestControls = await PestControl.find({ crop }).sort({ pestName: 1 });
    res.json(pestControls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single pest control
export const getPestControl = async (req, res) => {
  try {
    const { id } = req.params;
    const pestControl = await PestControl.findById(id);
    
    if (!pestControl) {
      return res.status(404).json({ message: 'Pest control not found' });
    }
    
    res.json(pestControl);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create pest control
export const createPestControl = async (req, res) => {
  try {
    const pestControl = new PestControl(req.body);
    await pestControl.save();
    res.status(201).json({ message: 'Pest control created successfully', pestControl });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update pest control
export const updatePestControl = async (req, res) => {
  try {
    const { id } = req.params;
    const pestControl = await PestControl.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!pestControl) {
      return res.status(404).json({ message: 'Pest control not found' });
    }
    
    res.json({ message: 'Pest control updated successfully', pestControl });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
