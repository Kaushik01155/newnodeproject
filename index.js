const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Import Routes
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categortRoutes');
const registerRoutes = require('./routes/registerRoutes');
const articleRoutes = require('./routes/articleRoutes');
const userRegisterRoutes = require('./routes/userregisterroutes');

// Import Constants
const { PORT, MONGO_LIVE_URL } = require('./config/constant');

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static Files (for images etc.)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection (Atlas)
mongoose.connect(MONGO_LIVE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
  process.exit(1); // Stop server if DB fails to connect
});

// Routes
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api', registerRoutes);
app.use('/api', articleRoutes);
app.use('/api', userRegisterRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
