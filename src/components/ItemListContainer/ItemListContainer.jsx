import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../mock/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);


    //const parametroURL = useParams();
    //console.log('parametroURL :', parametroURL.categoryName);
    const { categoryName } = useParams();
    //categoryName -> Medicamentos, Desodorantes, Perfumes | UNDEFINED

    useEffect(() => {
        const getProducts = () =>
            new Promise((res, rej) => {
                const prodFiltrados = products.filter(
                    (prod) => prod.category === categoryName
                );
                setTimeout(() => {
                    res(categoryName ? prodFiltrados : products);
                }, 500);
            });

    


        getProducts()
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryName]);

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>{saludo}</h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;

