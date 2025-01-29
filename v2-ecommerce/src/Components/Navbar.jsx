import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <img src="Public/Img/ThriftTech.jpg" alt="ThriftTech Logo" />
            <ul>
                <li><a href="/">Homepage</a></li>
                <li><a href="/form">Contact</a></li>
                <li><a href="/products">Products</a></li>
            </ul>
        </nav>
    )
}


export default Navbar;