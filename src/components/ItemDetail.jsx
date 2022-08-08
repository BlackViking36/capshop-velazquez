import React from "react";
import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';

export default function ItemDetail({ product }) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
        <Card.Title><h1>{product.name}</h1></Card.Title>
            <Card.Text>
                <p>precio: {product.price}</p>
                <p>stock: {product.stock}</p>
            </Card.Text>
        <ItemCount product={product} />
        </Card.Body>
        </Card>
    );
}