import React, { useState } from 'react';
import CartWidget from './CartWidget';
import estilos from './navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../FirebaseConfig';


    const Navbar = (props) => {
        const [categories, setCategories] = useState([]);
    
        useEffect(() => {
            const collectionCat = collection(db, 'categorias');
    
            getDocs(collectionCat).then((res) => {
                const categorias = res.docs.map((cat) => {
                    return {
                        id: cat.id,
                        ...cat.data(),
                    };
                });
                setCategories(categorias);
            });
        }, []);
        return (
            <nav className={props.isFooter ? estilos.nav : estilos.footer}>
                
                <Link to="/">Home</Link>
                <ul>
                    {props.isFooter ? (
                        <ul>
                            {categories.map((cat) => (
                                <li><NavLink key={cat.id} to={`/category/${cat.route}`}>
                                    {cat.name}
                                </NavLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <a href="https://google.com">GOOGLE</a>
                    )}
                </ul>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </nav>
        );
    };

    export default Navbar;
