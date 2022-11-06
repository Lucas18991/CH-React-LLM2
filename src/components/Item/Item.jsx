import React from 'react';
import estilos from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className={estilos.card}>
            <Link to={`/detail/${item.id}`}>
                <img height={250} width={200} src={item.img} alt="" />
                <div className={estilos.info}>
                    <h2>{item.title}</h2>
                    <h4>${item.price}.-</h4>
                    <h5>#{item.category}</h5>
                </div>
            </Link>
        </div>
    );
};

export default Item;
