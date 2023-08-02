import React from "react";
import { Route } from "react-router-dom";

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Music from "./components/Store";

import CartProvider from "./store/CartProvider";
import About from "./Pages/About";
import NavbarFn from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
// import Root from "./Pages/Root";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       { index:true, element: <Home /> },
//       { path: "store", element: <Music /> },
//       { path: "about", element: <About /> },
//     ],
//   },
// ]);
// <RouterProvider router={router} />

function App() {
  return (
    <CartProvider>
      <NavbarFn />
      <Header />
      <main>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/store">
          <Music />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </main>

      <Footer />
    </CartProvider>
  );
}

export default App;
