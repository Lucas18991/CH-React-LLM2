import React from 'react';
import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [unidades, setUnidades] = useState(0);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            totalQuantitySingleProduct(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    // producto en carrito ?
    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id);
    };

    //sumar cantidad del mismo producto
    const totalQuantitySingleProduct = (item, cantidad) => {
        const updateProducts = cart.map((prod) => {
            if (prod.id === item.id) {
                const productUpdated = {
                    ...prod,
                    cantidad: cantidad,
                };

                return productUpdated;
            } else {
                return prod;
            }
        });
        setCart(updateProducts);
    };

    //Total Unidades
    const totalQuantity = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidad ;
        });
        return acumulador;

    };

    //Total Precio
    const totalPrice = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidad * prod.price;
        });
        return acumulador;
    };


    //eliminar un solo producto pasandole el id
    const deleteOne = (id) => {
        const filteredProducts = cart.filter((prod) => prod.id !== id);
        setCart(filteredProducts);
    };

    //vaciar todo el carrito
    const clearCart = () => {
        setCart([]);
    };

    const getProductQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.cantidad;
    
    };
    useEffect(() => {
        totalQuantity();
        // eslint-disable-next-line
    }, [cart]);

    return (
        <CartContext.Provider
            value={{
                cart,
                unidades,
                addToCart,
                clearCart,
                deleteOne,
                totalPrice,
                totalQuantity,
                getProductQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;

