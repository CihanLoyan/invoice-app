import React from 'react'
import './CreateInvoice.css';

const CreateInvoice = () => {
  return (
    <div className='create-invoice'>
        <div className='invoice'>
                  <div className='invoice-info'>
                    <div className='invoice-no-status'>
                      <div className='status'>
                        <label>Payment Status</label>
                        <select>
                          <option value="paid">Paid</option>
                          <option value="not-paid">Not Paid</option>
                        </select>
                      </div>
                      <div className='invoice-no'>
                        <span>Invoice Number:</span>
                        <input type="text" placeholder="Invoice Number"></input>
                      </div>
                    </div>
                    <div className="companies">
                      <div className='from'>
                        <label>From:</label>
                        <input type="text" />
                      </div>
                      <div className='bill-to'>
                        <label>Bill To:</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="date">
                      <div className='invoice-date'>
                        <label>Invoice Date:</label>
                        <input type="date" />
                      </div>
                      <div className="due-date">
                        <label>Due Date:</label>
                        <input type="date" />
                      </div>
                    </div>
                  </div>
                  <div className='invoice-detail'>
                    <label>Project Name: </label>
                    <input type="text" />
                    <label>Description</label>
                    <textarea></textarea>
                  </div>
                  <div className='invoice-account'>
                    <div className='unit-qty-ext'>
                      <div className='unit-price'>
                        <label>Unit Price:</label>
                        <input type="text" />
                      </div>
                      <div className='quantity'>
                        <label>Quantity:</label>
                        <input type="number" min="1" />
                      </div>
                      <div className='extras'>
                        <label>Extras:</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className='total-pay'>
                        <div className='payment-type'>
                          <label>Payment Type:</label>
                          <select>
                            <option value="cash">Cash</option>
                            <option value="credit">Credit</option>
                            <option value="crypto">Crypto</option>
                            <option value="paypal">PayPal</option>
                          </select>
                        </div>
                        <div className='total-account'>
                          <div className='sub-total'>
                            <label>SubTotal:</label>
                            <span></span>
                          </div>
                          <div className='tax'>
                            <label>Tax:</label>
                            <span>%10</span>
                          </div>
                          <div className='total-price'>
                            <label>TOTAL:</label>
                            <span></span>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="invoice-print-button">
                    <button>
                      <i class="fa-solid fa-file-pdf"></i>
                      <span>Create</span>
                    </button>
                  </div>
            </div>
        </div>
  )
}

export default CreateInvoice;
