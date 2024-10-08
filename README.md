# E-commerce Project

This is a simple e-commerce web application built with **Next.js** and **Tailwind CSS**, fetching product data from the **Fake Store API**. The project implements basic features for learning purposes, including browsing products, viewing details of individual products, a checkout functionality, and static pages like **Contact**, **About**, and **Product View**.

## Features

- **Home Page**: Displays a list of products fetched from the Fake Store API.
- **Product View Page**: Shows detailed information about a single product.
- **Cart & Checkout**: Users can add items to the cart and proceed to a checkout page.
- **About Page**: Provides information about the store or project.
- **Contact Page**: Users can find contact details or send a message.

## Tech Stack

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for quickly designing responsive layouts.
- **Fake Store API**: A free API to simulate an online store with products and prices.

## Pages Overview

### Home Page (`/`)

Displays all products fetched from the Fake Store API, with basic product details like price and category. Users can click on a product to view more details.

### Product View Page (`/product/[id]`)

A dynamic route page that displays detailed information about a selected product, including the product description, price, category, and an option to add it to the cart.

### Cart Page (`/cart`)

Lists items added to the cart. Users can update quantities or remove products before proceeding to checkout.

### Checkout Page (`/checkout`)

Allows users to review their order and proceed with the checkout process. This is implemented for learning purposes without actual payment integration.

### About Page (`/about`)

A static page containing information about the project or the fictional store.

### Contact Page (`/contact`)

A static page providing contact information or a form to reach out to the store.

## Installation

To run this project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. **Install dependencies**:

   ```bash
   cd your-repo
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:3000`.

## Usage

- Browse products from the home page.
- View product details on the Product View page.
- Add items to the cart and review them before checkout.
- Explore static pages like **About** and **Contact**.

## Dependencies

- **Next.js**: `^13.0.0`
- **Tailwind CSS**: `^3.0.0`
- **Fake Store API**: Used for fetching product data.

## Folder Structure

```bash
├── components
│   ├── Navbar.js          # Navbar component
│   ├── ProductCard.js      # Card component for product display
│   └── Footer.js          # Footer component
├── pages
│   ├── index.js           # Home page
│   ├── product
│   │   └── [id].js        # Dynamic product detail page
│   ├── cart.js            # Cart page
│   ├── checkout.js        # Checkout page
│   ├── about.js           # About page
│   └── contact.js         # Contact page
├── public                 # Public assets (images, etc.)
└── styles
    └── globals.css        # Global styles using Tailwind CSS
```

Contributing
Feel free to contribute to the project by submitting a pull request or opening an issue.

License
This project is licensed under the MIT License - see the LICENSE file for details.
