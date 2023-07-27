import React,{useState} from 'react';

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import Cart from './Cart';

function NavbarFn() {
    const [showCart,setShowCart]=useState(true);
    const showCartHandler=()=>{
        console.log("btn click");
        setShowCart(true);
    }

  
    return (
       <> <Navbar expand="lg" className="bg-dark">
       <Container >
         <Navbar.Brand  className="text-white" href="#home">Home</Navbar.Brand>
          <Navbar.Brand   className="text-white" href="#home">Store</Navbar.Brand>
           <Navbar.Brand   className="text-white" href="#home">About</Navbar.Brand>
        
         
          <Button onClick={showCartHandler} type="submit" className="bg-dark">Cart 0</Button>
         
       
           
         
       </Container>
     </Navbar>
      {showCart && <Cart />}</>
      )
  
}

export default NavbarFn;