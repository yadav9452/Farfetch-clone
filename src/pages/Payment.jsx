import React from 'react';
import { AiOutlineCreditCard } from 'react-icons/ai';
import styles from '../css/payments.module.css';
import { useNavigate } from "react-router-dom";

export const Payment = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    alert('Your Payment Has successfully done')
    navigate("/");
  };
  return (
    <div>
      <p>Select your payment method</p>
      <div className={ styles.PaymentOptions }>
        <div>
          <img src="../../public/Images/paypal.png" alt="" />
        </div>
        <div>
          <p ><AiOutlineCreditCard />Debit or credit card</p>
        </div>
      </div>

      <div className={ styles.PaymentBox }>
        <div className={ styles.cardForm }>
          <p>CARD DETAILS</p>
          <br />
          <div>
            <p>Cardholder name</p>
            <input type="text" />
          </div>

          <div className={styles.cardNum_ExpDD}>
            <div>
              <p>Card numbe</p>
              <input type="text" />
            </div>
            <div>
              <p>Expiration date</p>
              <input type="text" placeholder='MM/YY' />
            </div>
          </div>

          <div>
            <p>Security code</p>
            <input type="text" />
          </div>

          <div>
            <input type="checkbox" />
            <p>Save payment details</p>
          </div>

          <div className={ styles.billingAddBox }>
            <p>BILLING ADDRESS</p>
            <div className={ styles.billingAddTexts }>
              <p>Name</p>
              <p>Address</p>
              <p>Country</p>
              <p>Edit</p>
            </div>
          </div>
        </div>

        <div>
          <div className={ styles.Summary }>
            <h3>Summary</h3>
            <div className={ styles.amountDiv }>
              <p>subtotal</p>
              <p>{ `$1,077.00` }</p>
            </div>
            <div className={ styles.amountDiv }>
              <p>Delivery</p>
              <p>{ `$24.00` }</p>
            </div>
            <hr />
            <div className={ styles.amountDiv }>
              <p>Total</p>
              <p>
                USD ${ "total_price" }.00
                <br />
                Import duties included
              </p>
            </div>
            <button onClick={ handleContinue } className={ styles.checkoutBtn }>
              Save and Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
