import React from 'react';
import './Invoice.css';
import { Link } from 'react-router-dom';
const Invoice = ({invoice}) => {
  return (
    <>
        <Link to={`/${invoice.invoiceNo}`} key={invoice.invoiceNo} >
            <div className='invoice'>
                <div className='top'>
                  <div className='invoice-no'>
                    <span>Invoice Number:</span>
                    <h4>{`${invoice.invoiceNo}`}</h4>
                  </div>
                  <div className="companies">
                    <div className='from'>
                      <label>From:</label>
                      <span>
                        {`${invoice.yourCompany}`}
                      </span>
                    </div>
                    <div className='bill-to'>
                      <label>Bill To:</label>
                      <span>
                        {invoice.billTo}
                      </span>
                    </div>
                  </div>
                  <div className="date">
                    <div className='invoice-date'>
                      <label>Invoice Date:</label>
                      <span>
                        {invoice.invoiceDate}
                      </span>
                    </div>
                    <div className="due-date">
                      <label>Due Date:</label>
                      <span>
                        {invoice.dueDate}
                      </span>
                    </div>
                  </div>
                </div>
                <div className='center'>2</div>
                <div className='bottom'>3</div>
            </div>
        </Link>
    </>
  )
}

export default Invoice;