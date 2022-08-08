import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        const db = getFirestore();
        let miCollection;

        if (idCategory === undefined) {
            miCollection = collection(db, "products");
        } else {
            miCollection = query(
                collection(db, "products"), 
                where("idCategory", "==", idCategory)
            );
        }

        getDocs(miCollection).then((data) => {

            const auxProducts = data.docs.map((product) => ({
            ...product.data(),
            id: product.id,
            }));

            setProducts(auxProducts);
        });

    }, [idCategory]);

    return <ItemList products={products} />
}
