import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { products } from '../../mock/products';

const ItemDetailContainer = () => {
   
    const { idProd } = useParams();

    return (
        <div style={{ backgroundColor: 'lightblue', minHeight: '70vh' }}>
            Contenedor de los detalles del item
            <ItemDetail />
        </div>
    );
};

export default ItemDetailContainer;
