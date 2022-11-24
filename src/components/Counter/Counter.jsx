import React, { useState, useEffect } from 'react';

//use
const Counter = ({ stock, onAdd, initial = 1 }) => {
    const [count, setCount] = useState(initial);

    useEffect(() => {
        setCount(initial);
    }, [initial]);

    const sumar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
       count>0? setCount(count - 1):setCount(count);
    };

    const agregarAlCarrito = () => {
        onAdd(count);
    };
    return (
        <div>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <p>Count: {count} </p>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    );
};

export default Counter;
