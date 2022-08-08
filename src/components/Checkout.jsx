import React, { useContext, useState } from "react";
import { cartContext } from "../context/CartContextComponent";
import { collection, addDoc, getFirestore } from "firebase/firestore";

export default function Checkout() {
    const { totalPrice, cart, deleteAll } = useContext(cartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [orderId, setOrderId] = useState("");

    function validateForm() {
        const order = {
            buyer: { name, tel, email },
            totalPrice,
            cart,
        };

        const db = getFirestore();
        const orders = collection(db, "orders");
        addDoc(orders, order).then(({ id }) => {
            setOrderId(id);
            deleteAll();
        });
    }

    if (cart.length === 0) {
        return <h6> Tu carro esta vacio... </h6>
    }

    return (
        <>
        {orderId ? (
            "Gracias por tu compra!"
        ) : (
            <div>
            <h1> Finalizar Compra </h1>
            <h3> Complete los siguientes datos: </h3>
            <input
                type="text"
                placeholder="Nombre"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="tel"
                placeholder="Telefono"
                onChange={(e) => setTel(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" onClick={validateForm}>
                {" "}FINALIZAR{" "}
            </button>
            </div>
        )}
        </>
    );
}
