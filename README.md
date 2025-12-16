# KaarisaNathar GiftShop - Premium Gift E-commerce Application

A modern, fully functional gift shop web application built with React, Redux, and Material-UI.

## ❤️ Features

- **Home Page**: Browse and filter gift products by category
- **Shopping Cart**: Add/remove items, adjust quantities, and apply discount codes
- **User Profile**: Sign in with demo accounts or create new profiles
- **Real-time Updates**: Daily updates banner at the top of the site
- **Responsive Design**: Mobile-friendly Material Design interface
- **State Management**: Redux for cart, authentication, and product data
- **Mock Data**: Pre-loaded products and user accounts for testing

## 🛠️ Tech Stack

- **Frontend**: React.js (v18.2.0)
- **State Management**: Redux & @reduxjs/toolkit
- **UI Framework**: Material-UI (MUI) v5
- **Routing**: React Router v6
- **Styling**: Emotion (MUI's CSS-in-JS)

## 📦 Project Structure

```
gift-shop-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js          # Navigation with daily updates banner
│   │   ├── ProductCard.js     # Individual product card component
│   │   └── Footer.js          # Footer with links
│   ├── pages/
│   │   ├── HomePage.js        # Main shopping page with products
│   │   ├── CartPage.js        # Shopping cart with checkout
│   │   └── ProfilePage.js     # User profile and authentication
│   ├── redux/
│   │   ├── store.js           # Redux store configuration
│   │   ├── cartSlice.js       # Cart state management
│   │   ├── authSlice.js       # Authentication state
│   │   └── productsSlice.js   # Product filtering state
│   ├── data/
│   │   └── mockData.js        # Mock products, users, and updates
│   ├── App.js                 # Main app component with routing
│   └── index.js               # React entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Extract the project files
2. Navigate to the project directory:
   ```bash
   cd gift-shop-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## 📋 Available Scripts

### `npm start`
Runs the app in development mode on [http://localhost:3000](http://localhost:3000)

### `npm build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

## 🎨 Design Highlights

- **Color Scheme**: Modern coral (#ff6b6b) with clean white backgrounds
- **Typography**: Professional sans-serif fonts
- **Spacing**: Consistent Material Design padding and gaps
- **Animations**: Smooth transitions and hover effects
- **Responsive Layout**: Grid-based responsive design for all screen sizes

## 💳 Features Breakdown

### Home Page
- Product grid with category filtering
- Search functionality for products
- High-quality product images
- Price, ratings, and descriptions
- Add to cart with visual feedback
- Feature cards highlighting benefits

### Shopping Cart
- Real-time cart updates
- Quantity adjustment controls
- Item removal functionality
- Discount code application (try: SAVE10, SAVE20, WELCOME)
- Free shipping threshold (₹50)
- Order summary with final total
- Checkout functionality

### User Profile
- Sign-in with demo accounts (John Doe, Jane Smith, Mike Johnson)
- User registration with custom profiles
- Profile information display
- Member statistics
- Account management

### Daily Updates Banner
- Promotional announcements
- Free shipping information
- New collection highlights
- Closable with dismiss button

## 🎯 Demo Accounts

Use these accounts to test the profile page:

1. **John Doe** - john@example.com
2. **Jane Smith** - jane@example.com
3. **Mike Johnson** - mike@example.com

## 💡 How to Use

1. **Browse Products**: Navigate the home page and filter by category
2. **Search**: Use the search bar to find specific products
3. **Add to Cart**: Click "Add to Cart" on any product
4. **View Cart**: Click the cart icon in the header
5. **Apply Discount**: Use codes like SAVE10, SAVE20, WELCOME
6. **Checkout**: Complete your order
7. **Sign In**: Click "Sign In" to view/create profiles

## 🔧 Redux State Structure

### Cart State
```javascript
{
  items: [],
  totalItems: 0,
  totalPrice: 0
}
```

### Auth State
```javascript
{
  user: null,
  isAuthenticated: false,
  availableUsers: []
}
```

### Products State
```javascript
{
  products: [],
  filteredProducts: [],
  selectedCategory: 'all'
}
```

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 600px (xs, sm)
- **Tablet**: 600px - 960px (md)
- **Desktop**: 960px+ (lg, xl)

## 🎯 Future Enhancements

- Payment gateway integration
- User reviews and ratings
- Wishlist functionality
- Order history
- Email notifications
- Product filtering by price range
- Real-time inventory management
- Dark mode toggle

## 📝 License

This project is created for educational purposes.

## 🤝 Support

For issues or questions, please refer to the component documentation in the source files.

---

**Built with ❤️ for gift lovers everywhere**
