const BASE_URL = process.env.BASE_URL || 'http://localhost:3001';

const PORT = process.env.PORT || "3001";

const MONGO_URL = "mongodb://localhost:27017/shopping";

const MONGO_LIVE_URL = process.env.MONGO_LIVE_URL || "mongodb+srv://kaushikkanjariya0111:S86YZSadiaU6KVN6@cluster0.uflpul0.mongodb.net/";

module.exports = {
  BASE_URL,
  IMAGE_PATH: `${BASE_URL}/uploads`,
  PORT,
  MONGO_URL,
  MONGO_LIVE_URL
};
