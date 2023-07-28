import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Music from "./components/Store";

import CartProvider from "./store/CartProvider";
import About from "./Pages/About";

import Home from "./Pages/Home";
import Root from "./Pages/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index:true, element: <Home /> },
      { path: "store", element: <Music /> },
      { path: "about", element: <About /> },
    ],
  },
]);

function App() {
 
  return <CartProvider><RouterProvider router={router} /></CartProvider>
}

export default App;


//  <CartProvider>
// <NavbarFn showCartHandler={showCartHandler} />
//
// <Header />
// <Home />
// <Music />
// <About />
// <Footer />
// </CartProvider>