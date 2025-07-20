# Mongoose Project

A Node.js REST API project built with Express.js and MongoDB using Mongoose ODM.

## Features

- User registration and authentication
- Product management
- Category management
- Article management
- File upload functionality
- JWT token authentication

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer
- **Password Hashing**: bcrypt

## Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd mongooseproject
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
PORT=3000
MONGO_LIVE_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the development server:
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login

### Products
- `GET /api/product` - Get all products
- `POST /api/product` - Create a new product
- `PUT /api/product/:id` - Update a product
- `DELETE /api/product/:id` - Delete a product

### Categories
- `GET /api/category` - Get all categories
- `POST /api/category` - Create a new category
- `PUT /api/category/:id` - Update a category
- `DELETE /api/category/:id` - Delete a category

### Articles
- `GET /api/articles` - Get all articles
- `POST /api/articles` - Create a new article
- `PUT /api/articles/:id` - Update an article
- `DELETE /api/articles/:id` - Delete an article

### User Registration
- `POST /api/userregister` - User registration endpoint

## Project Structure

```
mongooseproject/
├── config/
│   └── constant.js
├── controllers/
│   ├── ArticleController.js
│   ├── CategoryController.js
│   ├── loginController.js
│   ├── ProductController.js
│   ├── RegisterController.js
│   └── UserRegistercontroller.js
├── middleware/
│   └── verifyToken.js
├── models/
│   ├── article.js
│   ├── categorys.js
│   ├── login.js
│   ├── Product.js
│   ├── Register.js
│   └── UserRegister.js
├── routes/
│   ├── articleRoutes.js
│   ├── categortRoutes.js
│   ├── loginRoutes.js
│   ├── productRoutes.js
│   ├── registerRoutes.js
│   └── userregisterroutes.js
├── uploads/
├── index.js
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License. 