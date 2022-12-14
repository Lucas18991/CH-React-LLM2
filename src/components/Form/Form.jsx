import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
} from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../FirebaseConfig';


const Form = ({ cart, total, clearCart, handleId }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [tarjeta, setTarjeta] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: { nombre: nombre, apellido: apellido, tarjeta: tarjeta},
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then((res) => {
            handleId(res.id);
            clearCart();
            updateprod();
        });
    };

    const updateprod = () => {
        const orderDoc = doc(db, 'orders', 'A29yVRkpjasoaRfEo3G5');
        updateDoc(orderDoc, { total: 100 });
    };

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };
    const handleChangeApellido = (event) => {
        setApellido(event.target.value);
    };
    const handleChangeTarjeta = (event) => {
        setTarjeta(event.target.value);
    };
   
    return (
        <div style={{  border: '1px solid black',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '8px',
        margin: '8px'}}>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre..."
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                />
                <input
                    type="text"
                    placeholder="Apellido..."
                    name="apellido"
                    value={apellido}
                    onChange={handleChangeApellido}
                />
                  <input
                    type="text"
                    placeholder="tarjeta..."
                    name="tarjeta"
                    value={tarjeta}
                    onChange={handleChangeTarjeta}
                />
                   <button>Enviar</button>
            </form>
        </div>
    );
};
export default Form;