import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    
   const { totalQuantity } = useContext(CartContext);
//            

    

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="material-icons">shopping_cart</span>
            <span> {totalQuantity()}</span>
        </div>
    );
};

export default CartWidget;
