# Agriculture App Backend

Backend API for the Agriculture Farmer App built with Express.js, Node.js, and MongoDB.

## Features

- ✅ User/Profile Management
- ✅ Market Price Tracking
- ✅ Crop Planning & Information
- ✅ Government Schemes
- ✅ Job Listings
- ✅ Educational Videos
- ✅ Pest Control Information
- ✅ Chatbot Support

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env` file and update with your MongoDB connection string
   - Update `MONGODB_URI` with your MongoDB connection string
   - For local MongoDB: `mongodb://localhost:27017/agri-app`
   - For MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/agri-app`

3. **Start MongoDB:**
   - If using local MongoDB, make sure MongoDB service is running
   - For Windows: `net start MongoDB`
   - For Mac/Linux: `sudo systemctl start mongod`

4. **Run the server:**
   ```bash
   # Development mode (with nodemon)
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### Health Check
- `GET /api/health` - Check server status

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:userId` - Get user by ID
- `POST /api/users` - Create or update user profile

### Market Prices
- `GET /api/market-prices` - Get all market prices (query: crop, district)
- `GET /api/market-prices/:crop/:district` - Get price by crop and district
- `GET /api/market-prices/top/:crop` - Get top district for a crop
- `POST /api/market-prices` - Create or update market price

### Crops
- `GET /api/crops` - Get all crops (query: season)
- `GET /api/crops/season/:season` - Get crops by season (kharif, rabi, summer)
- `GET /api/crops/:id` - Get crop by ID
- `POST /api/crops` - Create new crop
- `PUT /api/crops/:id` - Update crop

### Schemes
- `GET /api/schemes` - Get all schemes
- `GET /api/schemes/:id` - Get scheme by ID
- `POST /api/schemes` - Create new scheme
- `PUT /api/schemes/:id` - Update scheme

### Jobs
- `GET /api/jobs` - Get all active jobs (query: category)
- `GET /api/jobs/category/:category` - Get jobs by category (edu, gen)
- `GET /api/jobs/:id` - Get job by ID
- `POST /api/jobs` - Create new job
- `PUT /api/jobs/:id` - Update job

### Videos
- `GET /api/videos` - Get all videos (query: category)
- `GET /api/videos/:id` - Get video by ID
- `POST /api/videos` - Create new video
- `PUT /api/videos/:id` - Update video

### Pest Control
- `GET /api/pest-control` - Get all pest controls (query: crop)
- `GET /api/pest-control/crop/:crop` - Get pest controls by crop
- `GET /api/pest-control/:id` - Get pest control by ID
- `POST /api/pest-control` - Create new pest control
- `PUT /api/pest-control/:id` - Update pest control

### Chat
- `GET /api/chat/:userId` - Get chat history
- `POST /api/chat/:userId` - Add message to chat
- `DELETE /api/chat/:userId` - Clear chat history

## Database Models

### User
- farmerName, village, land, crop, phone, language

### MarketPrice
- crop, district, minPrice, maxPrice, averagePrice, weeklyTrend, monthlyTrend

### Crop
- name, nameTamil, season, soil, water, days, gains, next, tip

### Scheme
- title, titleTamil, description, descriptionTamil, url, category, icon

### Job
- title, education, age, pay, type, category, contactInfo, isActive

### Video
- title, titleTamil, link, embedLink, category, thumbnail

### PestControl
- pestName, pestNameTamil, crop, description, solution, organicRemedy

### Chat
- userId, messages (array of {from, text, timestamp})

## Example API Calls

### Create User Profile
```bash
POST http://localhost:5000/api/users
Content-Type: application/json

{
  "farmerName": "John Doe",
  "village": "Sample Village",
  "land": "2.5",
  "crop": "Paddy",
  "phone": "1234567890",
  "language": "en"
}
```

### Get Market Prices
```bash
GET http://localhost:5000/api/market-prices?crop=Paddy&district=Chennai
```

### Get Crops by Season
```bash
GET http://localhost:5000/api/crops/season/kharif
```

## Connecting Frontend

Update your frontend API base URL to:
```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

## Production Deployment

1. Update `.env` with production MongoDB URI
2. Set `NODE_ENV=production`
3. Use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start server.js --name agri-app-backend
   ```

## License

ISC
