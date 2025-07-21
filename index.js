const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categortRoutes');
const registerRoutes = require('./routes/registerRoutes');
const articalRoutes = require('./routes/articleRoutes');
const userregisterroutes = require('./routes/userregisterroutes');

const { PORT, MONGO_LIVE_URL } = require('./config/constant');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(MONGO_LIVE_URL)
  .then(() => console.log('✅ Database Connected!'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api', registerRoutes);
app.use('/api', articalRoutes);
app.use('/api', userregisterroutes);

// Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
