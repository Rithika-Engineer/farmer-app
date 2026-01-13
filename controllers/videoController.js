import Video from '../models/Video.js';

// Get all videos
export const getAllVideos = async (req, res) => {
  try {
    const { category } = req.query;
    
    let query = {};
    if (category) query.category = category;
    
    const videos = await Video.find(query).sort({ createdAt: -1 });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single video
export const getVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id);
    
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create video
export const createVideo = async (req, res) => {
  try {
    const video = new Video(req.body);
    await video.save();
    res.status(201).json({ message: 'Video created successfully', video });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update video
export const updateVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    
    res.json({ message: 'Video updated successfully', video });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
