import React from "react";
import { Route, Switch } from "react-router-dom";

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
import ProductDetail from "./Pages/ProductDetail";
import Login from "./Pages/Login";
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
      
          {" "}
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/store" exact>
            <Music />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/store/:prodId">
            <ProductDetail />
          </Route>
        
      </main>

      <Footer />
    </CartProvider>
  );
}

export default App;
