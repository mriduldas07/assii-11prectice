import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ItemDetails from '../ItemDetails/ItemDetails';

const InventoryItems = () => {
    const [items, setItems] = useState([]);

    useEffect( () =>{
        fetch("fackdata.json")
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div className='mt-5 g-5'>
            <Container>
                <Row>
                    {
                        items.slice(0,6).map(item => <ItemDetails
                        key={item.id}
                        item = {item}
                        ></ItemDetails>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default InventoryItems;