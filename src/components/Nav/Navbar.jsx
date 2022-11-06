import React from 'react';
import CartWidget from './CartWidget';
import estilos from './navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import Counter from '../Counter/Counter';

const Navbar = (props) => {
    //console.log(props);
    //const condicion = true;
    if (props.isFooter) {
        return (
            <nav className={estilos.nav}>
                <Link to="/">Home</Link>
                <ul>
                    <li>
                    <NavLink  to="/category/Perfumes">Perfumes</NavLink>
                    </li><li>
                    <Link  to="/category/Medicamentos">Medicamentos</Link>
                    </li><li>
                    <Link  to="/category/Desodorantes">Desodorantes</Link>
                    </li>
                </ul>
                <Link to="/cart">
                    <CartWidget />
                    <Counter />
                </Link>
            </nav>
        );
    } else {
        return (
            <nav className={estilos.nav}>
                <Link to="/">Home</Link>
                <ul>
                    <li>
                        <a  href="https://google.com">Productos</a>
                    </li>
                    <li>
                        <a  href="https://google.com">Nosotros</a>
                    </li>
                    <li>
                        <a  href="https://google.com">Contacto</a>
                    </li>
                    <li>
                        <a  href="https://google.com">Facebook</a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default Navbar;
