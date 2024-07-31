
About the Project
This project is my final submission for my coding Bootcamp. It is a mock e-commerce product page built with React and React Bootstrap, forming a full MERN stack application. The website sells poetry postcards that can be mailed to customers. Users can create their own accounts to log in whenever they need a handwritten poem delivered right to their hands.

## Backend
Built with Node.js and Express.js, using MongoDB.

### Key Files and Directories
- `server.js`: Entry point; sets up the server, connects to MongoDB, and defines routes.
- `config/db.js`: Manages database connection.
- `models/`: Contains Mongoose schemas.
  - `User.js`: User schema.
  - `Product.js`: Product schema.
- `controllers/`: Handles API request logic.
  - `authController.js`: User authentication.
  - `productController.js`: Product operations.
- `routes/`: API routes.
  - `authRoutes.js`: Authentication routes.
  - `productRoutes.js`: Product routes.
- `middleware/authMiddleware.js`: JWT authentication for protected routes.
- `seedData.js`: Initial data for seeding.
- `seed.js`: Script to seed the database.
- `.env`: Environment variables (e.g., database URI, JWT secret).

## Frontend
Built with React.js, using React Router and Axios.

### Key Files and Directories
- `src/App.js`: Main component; sets up routing.
- `src/index.js`: Entry point; renders the App component.
- `src/components/`: Reusable components.
  - `Navbar.js`: Navigation bar.
  - `ProductCard.js`: Displays product information.
- `src/pages/`: Page components.
  - `Home.js`: Landing page.
  - `Login.js`: User login.
  - `Register.js`: User registration.
  - `Dashboard.js`: User dashboard (protected).
  - `Products.js`: All products.
  - `ProductDetails.js`: Single product details.
  - `Cart.js`: Shopping cart.
- `src/context/AppContext.js`: Global state management.
- `src/styles.css`: Custom CSS.
- `.env`: Environment variables for the frontend (e.g., API URL).

## Additional Files
- `.gitignore`: Files and directories to ignore in Git.
- `package.json`: Project dependencies and scripts.

## Key Features
- **User Authentication:** Registration, login, JWT-based protected routes.
- **Product Management:** List, view, and manage poetry products.
- **Shopping Cart:** Add, view, and manage cart items.
- **Responsive Design:** Mobile-friendly layout using Bootstrap.
- **Flash Messages:** User feedback for actions.
- **Protected Routes:** Accessible only to logged-in users.

## Installation

### Backend
1. Install dependencies:
   ```bash
   npm install
