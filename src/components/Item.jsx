import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function Item({ product }) {
    return (
        <>
        <Link to={"/item/" + product.id}>
            <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>
                    <h1>{product.name}</h1>
                </Card.Title>
                <Card.Text>
                    <p>precio: {product.price}</p>
                    <p>stock: {product.stock}</p>
                </Card.Text>
            </Card.Body>
            </Card>
        </Link>
        </>
    );
}
