import User from '../models/User.js';

// Get user profile
export const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create or update user profile
export const createOrUpdateProfile = async (req, res) => {
  try {
    const { farmerName, village, land, crop, phone, language } = req.body;
    
    // Check if user exists by phone or create new
    let user = await User.findOne({ phone: phone || '' });
    
    if (user) {
      // Update existing user
      user.farmerName = farmerName || user.farmerName;
      user.village = village || user.village;
      user.land = land || user.land;
      user.crop = crop || user.crop;
      user.phone = phone || user.phone;
      user.language = language || user.language;
      await user.save();
    } else {
      // Create new user
      user = new User({
        farmerName,
        village,
        land,
        crop,
        phone,
        language: language || 'en'
      });
      await user.save();
    }
    
    res.status(200).json({ 
      message: 'Profile saved successfully',
      user 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all users (for admin)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
