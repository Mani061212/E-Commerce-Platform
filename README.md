My E-Commerce App

Welcome to My E-Commerce App, a modern, responsive online shopping platform built with Next.js, React, and Tailwind CSS. This application offers a seamless user experience for Browse products, managing a shopping cart, and filtering items by category and price.

-------------------

Table of Contents

-Features

-Technologies Used

-Getting Started

-Prerequisites

-Installation

-Running the Development Server

-Building for Production

-Project Structure

-API Reference

-UI/UX Enhancements

-Future Enhancements

-Contributing

-License

-----------------

Features

This application includes the following core functionalities:

- Product Listings: Browse a wide range of products with detailed cards.

- Product Details: View comprehensive information for each product on its dedicated page.

- Shopping Cart: Add, remove, and update quantities of items in your cart.

- Cart Summary: See the total cost and item count in your shopping cart.

- Category Filtering: Filter products by specific categories.

- Text Search: Search for products by title or description.

- Price Filtering: Filter products by minimum and maximum price.

- Dark Mode Toggle: Switch between light and dark themes for comfortable viewing.

- Responsive Design: Optimized for various screen sizes, from mobile to desktop.

--------------

Technologies Used

* Next.js 14: React framework for production.
* React 18: JavaScript library for building user interfaces.
* TypeScript: Strongly typed JavaScript that builds on JavaScript, giving you better tooling at any scale.
* Tailwind CSS 3: A utility-first CSS framework for rapid UI development.
* Headless UI: Completely unstyled, fully accessible UI components.
* Heroicons: A set of free MIT-licensed high-quality SVG icons.
* Axios: Promise-based HTTP client for making API requests.


-----------------

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.


- Prerequisites

Node.js (LTS version recommended)
npm (comes with Node.js)
Installation

Clone the repository:

git clone https://github.com/your-username/my-ecommerce-app.git
cd my-ecommerce-app

Install dependencies:

npm install
This will install all required dependencies and devDependencies, including tailwindcss@^3.x.x, postcss@latest, and autoprefixer@latest.

Initialize Tailwind CSS (if not already done by create-next-app):

npx tailwindcss init -p
This command creates tailwind.config.js and postcss.config.js in your project root.

- Running the Development Server

To start the development server:

npm run dev
Open http://localhost:3000 in your browser to see the application. The app will automatically reload if you make changes to the source code.


- Building for Production

To build the application for production:

npm run build

To start the built production application:

npm run start

- Project Structure

The project follows a standard Next.js structure with a dedicated src directory for core application logic and components:


my-ecommerce-app/

├── public/                  # Static assets (images, fonts, etc.)

├── src/

│   ├── components/          # Reusable React components (Navbar, ProductCard, CartItem)

│   ├── context/             # React Context for global state management (CartContext, ThemeContext)

│   ├── lib/                 # Utility functions (API calls)

│   ├── pages/               # Next.js pages (routes: index, products, product/[id], cart, _app)

│   ├── styles/              # Global CSS styles (globals.css)

│   ├── types/               # TypeScript type definitions

│   └── __tests__/           # Jest/React Testing Library tests

├── .next/                   # Next.js build output (ignored by Git)

├── node_modules/            # Project dependencies (ignored by Git)


├── package.json             # Project metadata and scripts

├── tailwind.config.js       # Tailwind CSS configuration

├── postcss.config.js        # PostCSS configuration for Tailwind CSS

├── next.config.js           # Next.js configuration

├── tsconfig.json            # TypeScript configuration

└── README.md                # This file

API Reference

This application uses the Fake Store API for product data.

Base URL: https://fakestoreapi.com

Endpoints used:
/products: To fetch all products.
/products/{id}: To fetch a single product by its ID.
Images are configured to be optimized by Next.js from fakestoreapi.com via next.config.js.

- UI/UX Enhancements

The application incorporates various Tailwind CSS classes for an improved user experience, including:

* Enhanced Shadows & Borders: Provides depth and visual separation.
* Smooth Transitions & Hover Effects: Subtle animations on interactive elements for a dynamic feel.
* Responsive Adjustments: Uses Tailwind's responsive utilities (md:, lg:) for optimal viewing across devices.
* Dark Mode: A user-toggleable dark theme for comfortable Browse.
* Subtle Animations: A small bounce animation on the cart icon when items are added.
* Clear Quantity Controls: Refined input fields and buttons for cart item quantities.

- Future Enhancements

Here are some ideas for extending this application:

* User Authentication: Implement user registration, login, and profile management.
* Order History: Allow logged-in users to view their past orders.
* Payment Gateway Integration: Connect with a real payment processing service (e.g., Stripe) for actual transactions.
* Product Reviews & Ratings: Enable users to leave reviews and display average ratings.
* Wishlist: Allow users to save products to a personal wishlist.
* Pagination/Infinite Scroll: Implement advanced loading for large product catalogs.
* Admin Dashboard: Create a separate interface for managing products, orders, and users.

- Contributing
- 
Contributions are welcome! If you have suggestions or improvements, please feel free to open an issue or submit a pull request.

License

This project is open-source and available under the MIT License.

![Screenshot 2025-05-22 233415](https://github.com/user-attachments/assets/2867b8bb-26e1-4b82-a843-ace70be8b50c)
![Screenshot 2025-05-22 233809](https://github.com/user-attachments/assets/42782c10-e779-4067-b581-cb252a5236ad)
![Screenshot 2025-05-22 233726](https://github.com/user-attachments/assets/2cf554e8-dba1-4b26-9933-ae944a43cc91)
![Screenshot 2025-05-22 233702](https://github.com/user-attachments/assets/d0dbdadf-562c-43f2-bc58-80e5a8128b0b)
![Screenshot 2025-05-22 233630](https://github.com/user-attachments/assets/86876ca3-d7ff-40d0-837c-35e8c5506dfc)
![Screenshot 2025-05-22 233539](https://github.com/user-attachments/assets/3239d3fb-ba22-4e8c-99ea-8e2df29b104e)
![Screenshot 2025-05-22 233508](https://github.com/user-attachments/assets/4b71089d-782e-43f5-95c2-01445406d335)
![Screenshot 2025-05-22 233445](https://github.com/user-attachments/assets/286f7b69-f9c9-4398-8d68-c2a604cb1799)
