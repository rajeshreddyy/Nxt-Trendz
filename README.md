# Nxt Trendz - ECommerce Clone

Nxt Trendz is a clone of popular eCommerce platforms like Amazon and Flipkart. This application allows users to log in, browse through a list of products, search, filter, sort, view product details, and add items to a shopping cart.

### Demo Video:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-output-v0.gif" alt="product details output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

## Features

- **User Authentication**: Users can log in using their username and password.
- **Product Listing**: Browse a list of products with search, filters, and sorting options.
- **Product Details**: View detailed information about each product.
- **Add to Cart**: Users can add products to their cart and view their selections.
- **Shopping Cart**: Add products to the cart and manage them.
- **Routing**: Implemented different pages and routes for Login, Products, and Product details using React Router.
- **Persistent Login**: User login state is persisted using JWT tokens stored in local storage.
- **API Integration**: Communicates with backend APIs for login, product listing, and product details.
- **Error Handling**: Custom error pages for routes that are not found.

## Technologies Used

- **React JS**
- **JavaScript (JS)**
- **CSS**
- **Bootstrap**
- **React Router** (Route, Switch, Link)
- **REST API Calls**
- **Local Storage**
- **JWT Token** for Authentication and Authorization

## Authentication
- User credentials are sent via a POST request to the login endpoint.
- Upon successful login, a JWT token is returned and stored in local storage.
- This token is used in the headers of subsequent API calls to authorize the user.

## API Endpoints
- Login: `POST /login`
- Get Products: `GET /products`
- Get Product Details: `GET /products/:id`
- Add to Cart: `POST /cart`
- Get Cart Items: `GET /cart`


## Deployment
The app is currently hosted at [Nxt Trendz Live](https://nxttrendz9raj.ccbp.tech/).

## Folder Structure

```plaintext
Nxt-Trendz/
├── public/
│   ├── img/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   ├── setupTests.js
│   ├── components/
│   │   ├── AllProductsSection/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── Cart/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── FiltersGroup/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── Footer/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── Header/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── Home/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── LoginForm/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── NotFound/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── PrimeDealsSection/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── ProductCard/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── ProductItemDetails/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── Products/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── ProductsHeader/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── ProtectedRoute/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   └── SimilarProductItem/
│   │       ├── index.css
│   │       └── index.js
├── .eslintrc
├── .eslintignore
├── .gitattributes
├── .gitignore
├── .npmrc
├── .prettierignore
├── .prettierrc
├── README.md
├── package.json
├── pnpm-lock.yaml
└── yarn.lock




## Project Setup

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nxt-trendz.git
