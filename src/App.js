import React,{useContext} from "react";
import { Redirect, Route,Switch} from "react-router-dom";

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
import CartContext from "./store/CartContext";
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
 const authCtx= useContext(CartContext);
 const isLoggedIn=authCtx.isLoggedIn;
 console.log(isLoggedIn);
  return (<>
      <NavbarFn />
      <Header />
      <Switch>
      
         
          <Route path="/" exact >
            <Home />
          </Route>
          {isLoggedIn && <Route path="/store" >
            <Music />
          </Route>}
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
          <Route path="*">
            <Redirect to="/login" ></Redirect>
          </Route>
        
      </Switch>

      <Footer />
      </>
  );
}

export default App;
