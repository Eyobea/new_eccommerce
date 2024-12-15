import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/logo2.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalItems } = useContext(ShopContext)
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={cart_icon} alt='logo' />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}>
                    <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("mens") }}>
                    <Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>
                    {menu === "mens" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("womens") }}>
                    <Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>
                    {menu === "womens" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("kids") }}>
                    <Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>
                    {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <Link to='/cart'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='nav-cart-count'>{getTotalItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
