const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Import routes
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categortRoutes');
const registerRoutes = require('./routes/registerRoutes');
const articalRoutes = require('./routes/articleRoutes');
const userregisterroutes = require('./routes/userregisterroutes');

const app = express();
const PORT = 3001;

// ✅ Hardcoded MongoDB URI for Render or local use
const MONGO_URI = "mongodb+srv://kaushikkanjariya0111:S86YZSadiaU6KVN6@cluster0.uflpul0.mongodb.net/shopping?retryWrites=true&w=majority";

// Debug log to verify connection string
console.log("Mongo URI:", MONGO_URI);

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static file handling
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api', registerRoutes);
app.use('/api', articalRoutes);
app.use('/api', userregisterroutes);

// Test route
app.get('/', (req, res) => {
    res.send('🚀 API is working!');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
