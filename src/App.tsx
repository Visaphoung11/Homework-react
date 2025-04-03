// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App

// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import About from "./pages/About";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <nav className="bg-blue-600 p-4">
//         <ul className="flex space-x-6 justify-center text-white">
//           <li>
//             <Link to="/" className="hover:underline">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/products" className="hover:underline">
//               Products
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="hover:underline">
//               About
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      {/* Navbar */}
      <nav className="bg-blue-600 dark:bg-gray-900 p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-white font-bold text-xl uppercase">Watch.ME</div>

          {/* Navigation Links */}
          <ul className="hidden sm:flex space-x-6 text-white font-semibold">
            <li>
              <Link
                to="/"
                className="hover:text-pink-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-pink-500 transition duration-300"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-pink-500 transition duration-300"
              >
                About
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="sm:hidden flex flex-col space-y-1">
            <span className="w-6 h-1 bg-white"></span>
            <span className="w-6 h-1 bg-white"></span>
            <span className="w-6 h-1 bg-white"></span>
          </button>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
