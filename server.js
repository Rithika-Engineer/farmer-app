import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/database.js';

// Import routes
import userRoutes from './routes/userRoutes.js';
import marketPriceRoutes from './routes/marketPriceRoutes.js';
import cropRoutes from './routes/cropRoutes.js';
import schemeRoutes from './routes/schemeRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import videoRoutes from './routes/videoRoutes.js';
import pestControlRoutes from './routes/pestControlRoutes.js';
import chatRoutes from './routes/chatRoutes.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/market-prices', marketPriceRoutes);
app.use('/api/crops', cropRoutes);
app.use('/api/schemes', schemeRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/pest-control', pestControlRoutes);
app.use('/api/chat', chatRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Agriculture App Backend is running',
    timestamp: new Date().toISOString()
  });
});

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Agriculture App Backend API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      users: '/api/users',
      marketPrices: '/api/market-prices',
      crops: '/api/crops',
      schemes: '/api/schemes',
      jobs: '/api/jobs',
      videos: '/api/videos',
      pestControl: '/api/pest-control',
      chat: '/api/chat'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;

// Initialize server after database connection
const startServer = async () => {
  try {
    // Connect to database
    await connectDB();
    
    // Start listening
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
      console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🌐 API URL: http://localhost:${PORT}`);
      console.log(`\n💡 To seed initial data, run: npm run seed`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
