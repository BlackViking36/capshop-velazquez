import React, { useContext } from "react";
import { cartContext } from "../context/CartContextComponent";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cart, totalCount, totalPrice, deleteFromCart } = useContext(cartContext);

    return (
        <>
        {cart.map((item) => (
            <div key={item.id}>
                {item.name + " " + item.count}{" "}
                <span onClick={() => deleteFromCart(item.id)}> 🗑️ </span>
            </div>
        ))};
        <div>
            <p> Tienes en el carro: {totalCount} a pagar: {totalPrice} </p>
        </div>
        <Link to="/checkout"> FINALIZAR COMPRA! </Link>
        </>
    );
}
