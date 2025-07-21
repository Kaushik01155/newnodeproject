const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config(); // Load environment variables

// Import routes
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categortRoutes');
const registerRoutes = require('./routes/registerRoutes');
const articalRoutes = require('./routes/articleRoutes');
const userregisterroutes = require('./routes/userregisterroutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Debug: Print the MongoDB URI to verify it's loaded correctly
console.log("Mongo URI:", process.env.MONGO_LIVE_URL);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_LIVE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit app if DB connection fails
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static file handling (e.g., image uploads)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api', registerRoutes);
app.use('/api', articalRoutes);
app.use('/api', userregisterroutes);

// Default Route
app.get('/', (req, res) => {
    res.send('🚀 API is working!');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
