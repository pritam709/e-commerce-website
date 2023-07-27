import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';

function NavbarFn() {
  
    return (
        <Navbar expand="lg" className="bg-dark">
          <Container >
            <Navbar.Brand  className="text-white" href="#home">Home</Navbar.Brand>
             <Navbar.Brand   className="text-white" href="#home">Store</Navbar.Brand>
              <Navbar.Brand   className="text-white" href="#home">About</Navbar.Brand>
           
            
             <Button type="submit" className="bg-dark">Cart 0</Button>
          
              
            
          </Container>
        </Navbar>
      );
  
}

export default NavbarFn;