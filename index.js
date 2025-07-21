const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');

// Routes
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categortRoutes');
const registerRoutes = require('./routes/registerRoutes');
const articalRoutes = require('./routes/articleRoutes');
const userregisterroutes = require('./routes/userregisterroutes');

// Load .env
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGO_LIVE_URL)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit if MongoDB fails
  });

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api', registerRoutes);
app.use('/api', articalRoutes);
app.use('/api', userregisterroutes);

// Start server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
});
