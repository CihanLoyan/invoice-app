import React from 'react'
import './Navbar.css';

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
                    <i class="fa-solid fa-file-invoice"></i>
                    Invoices
                    </li>
                <li>
                    <i class="fa-solid fa-pen-to-square"></i>
                    Create Invoice
                </li>
            </ul>
        </div>
        <div className="right"></div>
    </div>
  )
}

export default Navbar;
