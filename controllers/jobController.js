import Job from '../models/Job.js';

// Get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const { category } = req.query;
    
    let query = { isActive: true };
    if (category) query.category = category;
    
    const jobs = await Job.find(query).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get jobs by category
export const getJobsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    
    if (!['edu', 'gen'].includes(category)) {
      return res.status(400).json({ message: 'Invalid category' });
    }
    
    const jobs = await Job.find({ category, isActive: true }).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single job
export const getJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create job
export const createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ message: 'Job created successfully', job });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update job
export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    
    res.json({ message: 'Job updated successfully', job });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
