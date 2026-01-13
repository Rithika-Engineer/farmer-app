# Backend Setup Guide

## Quick Start

1. **Install Dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Create .env File:**
   Create a `.env` file in the `backend` folder with the following content:

   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # MongoDB Configuration
   # For local MongoDB:
   MONGODB_URI=mongodb://localhost:27017/agri-app

   # For MongoDB Atlas (Cloud), use:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/agri-app?retryWrites=true&w=majority

   # JWT Secret (Change this to a random string in production)
   JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

   # API Keys (if needed)
   OPENWEATHER_API_KEY=5b5ff156792b20ec190acb8be8302c57
   ```

3. **Start MongoDB:**
   - **Windows:** Open Command Prompt as Administrator and run:
     ```bash
     net start MongoDB
     ```
   - **Mac/Linux:** 
     ```bash
     sudo systemctl start mongod
     ```
   - Or use MongoDB Atlas (cloud) - no local installation needed

4. **Run the Server:**
   ```bash
   # Development mode (auto-restart on changes)
   npm run dev

   # Production mode
   npm start
   ```

5. **Seed Initial Data (Optional):**
   ```bash
   npm run seed
   ```

## Testing the API

Once the server is running, test it:

1. **Health Check:**
   Open browser: `http://localhost:5000/api/health`

2. **API Root:**
   Open browser: `http://localhost:5000/`

## Connecting Frontend

In your frontend code, update the API base URL:

```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

Then make API calls like:
```javascript
// Example: Get user profile
fetch(`${API_BASE_URL}/users/123`)
  .then(res => res.json())
  .then(data => console.log(data));

// Example: Create/Update profile
fetch(`${API_BASE_URL}/users`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    farmerName: "John Doe",
    village: "Sample Village",
    land: "2.5",
    crop: "Paddy",
    phone: "1234567890"
  })
});
```

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check the MONGODB_URI in .env file
- For MongoDB Atlas, ensure your IP is whitelisted

### Port Already in Use
- Change PORT in .env file to a different port (e.g., 5001)
- Or stop the process using port 5000

### Module Not Found
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then run `npm install`
