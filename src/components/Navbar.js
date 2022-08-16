import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
            <i class="fa-solid fa-receipt"></i>
            <p>Invoicing App</p>
        </div>
        <div className="center">
            <ul>
                <li>
                    <Link to="/">
                        <i class="fa-solid fa-file-invoice"></i>
                        Invoices
                    </Link>
                    </li>
                <li>
                    <Link to="/create">
                        <i class="fa-solid fa-pen-to-square"></i>
                        Create Invoice
                    </Link>
                </li>
            </ul>
        </div>
        <div className="right"></div>
    </div>
  )
}

export default Navbar;
