import React,{useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';
import CartContext from '../store/CartContext';
import { Link } from 'react-router-dom';

const productsArr = [
  {
    id:"p1",
    title: "Album 1",

    price: 80,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id:"p2",
    title: "Album 2",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id:"p3",
    title: "Album 3",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id:"p4",
    title: "Album 4",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Music = () => {
 const ctx= useContext(CartContext);
 const addItemTocart=(item)=>{

  // console.log("btn-click");

  // console.log({...item,quantity:1});

  ctx.addItemTocart({...item,quantity:1})

 }
  return (
    <>
      <div>
        <p
          className="text-center m-5
                fw-bolder fs-1 "
        >
          MUSIC
        </p>
      </div>

      <Container>
      <Row xs={1} md={2} className="g-5">
        {productsArr.map((item, idx) => (
          <Col key={idx}>
            <Link to={`/store/${item.id}`}><Card  className="w-25 border-0 offset-4">
              <Card.Title className='text-center'>{item.title}</Card.Title>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Text>
                 $ {item.price} 
                  <Button onClick={addItemTocart.bind(null,item)}> Add to Cart</Button>
                </Card.Text>
              </Card.Body>
            </Card></Link>
          </Col>
        ))}
      </Row>
      </Container>

      <div className='d-flex justify-content-center mt-4 mb-auto'><Button className=' fw-bold bg-dark mb-4'> See the Cart</Button></div>
    </>
  );
};

export default Music;
