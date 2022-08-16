import React from 'react'
import './Invoices.css';
import Invoice from '../components/Invoice';

const Invoices = ({invoices}) => {
  return (
    <div className='invoices'>
      {invoices.map(invoice => (
        <Invoice key={invoice.invoiceNo} invoice={invoice}/>
      ))}
    </div>
  )
}

export default Invoices;
