import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import ProductDetails from "./components/ProductDetail";
import Cart from "./pages/Cart";
import { CartProvider } from "./pages/CartContext"; // Import CartProvider
import Footer from "./components/Footer"; // Import the Footer component

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
        <nav className="bg-blue-600 dark:bg-gray-900 p-4 shadow-md">
          <div className="container mx-auto px-4 flex items-center justify-between relative">
            {/* Logo */}
            <div className="text-white font-bold text-xl uppercase">
              Watch.ME
            </div>

            {/* Hamburger Button for Mobile */}
            <button
              className="sm:hidden flex flex-col space-y-1 z-50"
              onClick={toggleMenu}
            >
              <span className="w-6 h-1 bg-white"></span>
              <span className="w-6 h-1 bg-white"></span>
              <span className="w-6 h-1 bg-white"></span>
            </button>

            {/* Desktop Menu */}
            <ul className="hidden sm:flex space-x-6 text-white font-semibold">
              {["Home", "Products", "Cart", "About"].map((label, idx) => (
                <li key={idx}>
                  <Link
                    to={`/${
                      label.toLowerCase() === "home" ? "" : label.toLowerCase()
                    }`}
                    className="group relative inline-block transition duration-300"
                  >
                    <span className="hover:text-pink-400">{label}</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu */}
            <div
              className={`absolute top-full left-0 w-full bg-blue-600 dark:bg-gray-900 sm:hidden overflow-hidden transition-all duration-300 ease-in-out z-40 ${
                isMenuOpen ? "max-h-60 opacity-100 py-4" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="flex flex-col items-center space-y-4 text-white font-semibold">
                {["Home", "Products", "Cart", "About"].map((label, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/${
                        label.toLowerCase() === "home"
                          ? ""
                          : label.toLowerCase()
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      className="group relative inline-block transition duration-300"
                    >
                      <span className="hover:text-pink-400">{label}</span>
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* Footer */}
        <Footer /> {/* Add the Footer component here */}
      </div>
    </CartProvider>
  );
}

export default App;
