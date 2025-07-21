<<<<<<< HEAD
# MongoDB Express API Project

A RESTful API built with Node.js, Express, and MongoDB for managing products, categories, articles, and user registration.

## Features

- **Product Management**: CRUD operations for products with image upload
- **Category Management**: Create and manage product categories
- **Article Management**: Handle articles with full CRUD operations
- **User Registration**: User registration and authentication system
- **File Upload**: Support for image uploads with multer
- **JWT Authentication**: Secure API endpoints with JWT tokens

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer
- **CORS**: Cross-origin resource sharing enabled

## Project Structure

```
mongooseproject/
├── config/
│   └── constant.js          # Configuration constants
├── controllers/
│   ├── ArticleController.js
│   ├── CategoryController.js
│   ├── loginController.js
│   ├── ProductController.js
│   ├── RegisterController.js
│   └── UserRegistercontroller.js
├── middleware/
│   └── verifyToken.js       # JWT token verification
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
├── uploads/                 # File upload directory
├── index.js                 # Main application file
└── package.json
```

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
MONGO_URL=your_mongodb_connection_string
PORT=3000
```

4. Start the server:
```bash
npm start
```

## API Endpoints

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
- `GET /api/article` - Get all articles
- `POST /api/article` - Create a new article
- `PUT /api/article/:id` - Update an article
- `DELETE /api/article/:id` - Delete an article

### User Registration
- `POST /api/register` - Register a new user
- `POST /api/login` - User login
- `POST /api/userregister` - Additional user registration endpoint

## Environment Variables

Create a `.env` file with the following variables:

```env
MONGO_URL=mongodb://localhost:27017/your_database_name
PORT=3000
```

## Dependencies

- express
- mongoose
- cors
- body-parser
- dotenv
- multer (for file uploads)
- jsonwebtoken (for JWT authentication)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 7feb319e2949f4fe26da98fa589d842a0d1391ce
