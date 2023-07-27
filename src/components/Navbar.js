import React ,{useContext} from 'react';

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import CartContext from '../store/CartContext';


function NavbarFn(props) {
  const ctx= useContext(CartContext);

  const totalItems=ctx.items.reduce((curr,item)=>{
    return curr+item.quantity;
  },0)
    

  
    return (
       <> <Navbar expand="lg" className="bg-dark">
       <Container >
         <Navbar.Brand  className="text-white" href="#home">Home</Navbar.Brand>
          <Navbar.Brand   className="text-white" href="#home">Store</Navbar.Brand>
           <Navbar.Brand   className="text-white" href="#home">About</Navbar.Brand>
        
         
          <Button onClick={props.showCartHandler} type="submit" className="bg-dark">Cart {totalItems}</Button>
         
       
           
         
       </Container>
     </Navbar>
     </>
      )
  
}

export default NavbarFn;