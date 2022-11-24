
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Counter from '../Counter/Counter';


const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0);
    const { addToCart, getProductQuantity } = useContext(CartContext);
    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem);
        addToCart(item, cantidadItem);
    };


    const quantity = getProductQuantity(item.id);

    return (
        <div className="detail">
            <img src={`../${item.img}`} alt={`../${item.title}`} />
            <div className="info">
                <h2>{item.title}</h2>
                <p>
                Detalles de los items
                </p>
                <h3>${item.price}.-</h3>
                {cantidad === 0 ? (
                    <Counter
                        stock={item.stock}
                        initial={quantity}
                        onAdd={onAdd}
                    />
                ) : (
                    <Link to="/cart">Ir al carrito</Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
