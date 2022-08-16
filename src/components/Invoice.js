import React from 'react';
import './Invoice.css';
import { Link } from 'react-router-dom';
const Invoice = ({invoice}) => {
  return (
    <>
        <Link to={`/${invoice.invoiceNo}`} key={invoice.invoiceNo} >
            <div className='invoice'>
                <div className='invoice-info'>
                  <div className='invoice-no-status'>
                    <div className='status'>
                      <h4 className={invoice.status ? 'green' : 'red'}>
                      {
                        invoice.status ? 'Paid' : 'Not Paid'
                      }
                      </h4>
                    </div>
                    <div className='invoice-no'>
                      <span>Invoice Number:</span>
                      <h4>{`#${invoice.invoiceNo}`}</h4>
                    </div>
                  </div>
                  <div className="companies">
                    <div className='from'>
                      <label>From:</label>
                      <span>
                        {`${invoice.from}`}
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
                <div className='invoice-detail'>
                  <h4>{invoice.projectName}</h4>
                  <p>{invoice.description}</p>
                </div>
                <div className='invoice-account'>
                  <div className='unit-qty-ext'>
                    <div className='unit-price'>
                      <label>Unit Price:</label>
                      <span>{`$${invoice.unitPrice}`}</span>
                    </div>
                    <div className='quantity'>
                      <label>Quantity:</label>
                      <span>{`${invoice.quantity}`}</span>
                    </div>
                    <div className='extras'>
                      <label>Extras:</label>
                      <span>{`$${invoice.extras}`}</span>
                    </div>
                  </div>
                  <div className='total-pay'>
                      <div className='payment-type'>
                        <label>Payment Type:</label>
                        <span>{`${invoice.paymentType}`}</span>
                      </div>
                      <div className='total-account'>
                        <div className='sub-total'>
                          <label>SubTotal:</label>
                          <span>{`$${invoice.subTotal}`}</span>
                        </div>
                        <div className='tax'>
                          <label>Tax:</label>
                          <span>{`%${invoice.taxRate}`}</span>
                        </div>
                        <div className='total-price'>
                          <label>TOTAL:</label>
                          <span>{`$${invoice.totalPrice}`}</span>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </Link>
    </>
  )
}

export default Invoice;