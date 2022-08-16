import React from 'react';
import './Invoice.css';
import { Link } from 'react-router-dom';
const Invoice = ({invoice}) => {
  return (
    <>
        <Link to={`/${invoice.invoiceNo}`} key={invoice.invoiceNo} >
            <div className='invoice'>
                {invoice.customerName}
            </div>
        </Link>
    </>
  )
}

export default Invoice;