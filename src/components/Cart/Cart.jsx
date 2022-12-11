import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import CartDetail from './CartDetail';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const [idCompra, setIdCompra] = useState('');
    const { cart, clearCart, deleteOne, totalPrice } = useContext(CartContext);

    const total = totalPrice();

    const handleId = (id) => {
        setIdCompra(id);
    };

    if (idCompra) {
        return <h1>Gracias por comprar tu id es: {idCompra}
        <br />
        Volver al inicio <Link to="/">Home</Link> </h1>;
    }

    if (cart.length === 0) {
        return (
            <h1>
                Aún no tenés productos, podés ir al <Link to="/">Home</Link>{' '}
                para buscar algún producto
            </h1>
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            {cart.map((prod) => (
                <CartDetail key={prod.id} prod={prod} deleteOne={deleteOne} />
                ))}
          
          <button onClick={clearCart}>Clear Cart</button>
            <h4>Total: ${total}</h4>
            <Form
                cart={cart}
                total={total}
                clearCart={clearCart}
                handleId={handleId}
            />
        </div>
    );
};

export default Cart;
