import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const cartContext = createContext();

export default function CartContextComponent({ children }) {
    const [cart, setCart] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    function addToCart(item, count) {
        const cartAux = [...cart];

        let foundInCart = false;

        for (let i = 0; i < cartAux.length; i++) {
        if (cartAux[i].id === item.id) {
            cartAux[i].count = cartAux[i].count + count;
            foundInCart = true;
        }
        }
        if (!foundInCart) {
        cartAux.push({ ...item, count });
        }
        setCart(cartAux);
    }

    function deleteFromCart(id) {
        setCart(cart.filter((item) => item.id !== id));
    }

    function deleteAll(id) {
        setCart([]);
    }

    useEffect(() => {
        setTotalCount(cart.reduce((acc, item) => acc + item.count, 0));
        setTotalPrice(cart.reduce((acc, item) => acc + item.count * item.price, 0));
    }, [cart]);

    return (
        <cartContext.Provider value={{ cart, addToCart, totalCount, totalPrice, deleteFromCart, deleteAll }}>
        {children}
        </cartContext.Provider>
    );
}
