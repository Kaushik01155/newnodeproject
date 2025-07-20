const express = require('express');
var cors = require('cors')
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categortRoutes');
const registerRoutes = require('./routes/registerRoutes');
const articalRoutes = require('./routes/articleRoutes');
const userregisterroutes = require('./routes/userregisterroutes');
const path = require('path');
const { PORT, MONGO_URL, MONGO_LIVE_URL } = require('./config/constant');

const app = express();

app.use(cors());
mongoose.connect(process.env.MONGO_URL).then(() => console.log('Database Connected!'));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api', registerRoutes);
app.use('/api', articalRoutes);
app.use('/api', userregisterroutes);

app.listen(PORT, () => {
    console.log("server started");
});
