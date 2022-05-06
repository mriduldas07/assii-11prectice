import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ItemDetails = ({item}) => {
    const {id,name,img,description,price,quantity,supplier} = item;
    return (
        <Col lg={4} md={4} sm={12} className='mt-4'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                </Card.Body>
        </Card>
        </Col>
    );
};

export default ItemDetails;