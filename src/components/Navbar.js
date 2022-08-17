import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
            <i class="fa-solid fa-receipt"></i>
            <h4>Invoicing App</h4>
        </div>
        <div className="center">
            <ul>
                <li>
                    <Link to="/">
                        <i class="fa-solid fa-file-invoice"></i>
                        <span className='show-invoices'>
                            Invoices
                        </span>
                    </Link>
                    </li>
                <li>
                    <Link to="/create">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <span className="create-invoice">
                            Create Invoice
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="right"></div>
    </div>
  )
}

export default Navbar;
