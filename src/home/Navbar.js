import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = ()=>{
    return(
        <nav className="nav-wrapper">
            <div className="container">
                <ul className='left'>
                <Link to="/" className="brand-logo">Shopping</Link>
                </ul>

                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">My cart
                        <i className="material-icons">shopping_cart</i>
                    </Link>
                    </li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar;
