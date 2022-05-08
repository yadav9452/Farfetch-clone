import React from 'react'
import styles from '../../css/payments.module.css'
export const PaymentFooter = () => {
  return (
      <div className={ styles.cardForm }>
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
  )
}
