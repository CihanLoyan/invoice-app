import React, { useState } from 'react'
import './Invoices.css';
import Invoice from '../components/Invoice';

const Invoices = ({invoices}) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className='invoices'>
      <div className='search-bar'>
        <input 
            type='text'
            value={value}
            onChange={onChange}
            placeholder='Search'
        />
      </div>
      <div className='invoices-list'>
        {invoices.filter((invoice) => {
          const searchTerm = value.toLowerCase();
          const projectName = invoice.projectName.toLowerCase();
          return projectName.startsWith(searchTerm);
        })
        .map(invoice => (
          <Invoice key={invoice.invoiceNo} invoice={invoice}/>
        ))}
      </div>
    </div>
  )
}

export default Invoices;
