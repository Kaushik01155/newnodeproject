const BASE_URL = "https://newnodeproject-1bh7.onrender.com";

const PORT = process.env.PORT || 3001; // Important for Render

const MONGO_URL = "mongodb://localhost:27017/shopping"; // for local
const MONGO_LIVE_URL = "mongodb+srv://kaushikkanjariya0111:S86YZSadiaU6KVN6@cluster0.uflpul0.mongodb.net/shopping?retryWrites=true&w=majority";

module.exports = {
  BASE_URL,
  IMAGE_PATH: `${BASE_URL}/uploads`,
  PORT,
  MONGO_URL,
  MONGO_LIVE_URL
};
