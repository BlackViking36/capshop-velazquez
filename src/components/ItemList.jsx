import React from "react";
import Item from "./Item";

export default function ItemList({ products }) {
    return (
        <div style={{display: 'flex', flexDirection: 'row', padding:"2em", margin:"2em", justifyContent: 'center'}}>
        {products.map((product) => (
            <Item key={product.id} product={product} />
        ))}
        </div>
    );
}
