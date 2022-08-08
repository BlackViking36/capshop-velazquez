import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../context/CartContextComponent";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


export default function ItemCount({ product }) {
    const [count, setCount] = useState(1);
    const [removeButton, setRemoveButton] = useState(false);
    const { cart, addToCart } = useContext(cartContext);

    function sum() {
        if (count < product.stock) {
        setCount(count + 1);
        }
    }

    function res() {
        if (count >= 1) {
        setCount(count - 1);
        }
    }

    function onAdd() {
        addToCart(product, count);
        setRemoveButton(true);
    }

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <div>
        <span style={{ cursor: "pointer" }} onClick={res}>
            -
        </span>
        {count}
        <span style={{ cursor: "pointer" }} onClick={sum}>
            +
        </span>
        {removeButton ? (
            <>
            <p> Producto agregado.. </p>
            <Link to="/"> Seguir comprando </Link>
            <Link to="/checkout"> Finalizar compra </Link>
            </>
        ) : (
            <Button onClick={onAdd}> AGREGAR AL CARRITO </Button>
        )}
        </div>
    );
}
