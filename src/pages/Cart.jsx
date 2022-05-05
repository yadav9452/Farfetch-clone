import React, { useState } from 'react'
import styles from '../css/cart.module.css'
export const Cart = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const [ cartItems, setCartItems ] = useState([
        {
            img: "https://cdn-images.farfetch-contents.com/15/50/18/82/15501882_28982151_600.jpg",
            id : 1,
            title : "Acne Studios",
            price : 782
        }
    ]);

    const handleDel = (_id) => {
        console.log("u", _id);
       
        }
  return (
    <div className='cart-container'>
        <h1>SHOPPING BAG</h1>
          <div>
              <div>

                  { cartItems.map((data) => {

                      return (

                          <div className={ styles.cart }>

                          <div key={ data.id } className={ styles.heading }>
                                  <div className={ styles.cartprod }>styles
                                  <div className={ styles.imageDiv } >
                                          <img style={ { width: "100px" } } src={ data.img } alt="img" />
                                  </div>
                                  <div className={ styles.detailsDiv }>
                                      <div>{ data.title }</div>
                                      <div>{ data.price }</div>
                                  </div>
                              </div>
                              <div className={ styles.cartdata }>{ date }</div>
                              <div className={ styles.cartdata }>
                                  <select>
                                      <option value={ 1 }>1</option>
                                      <option value={ 2 }>2</option>
                                      <option value={ 3 }>3</option>
                                      <option value={ 4 }>4</option>
                                      <option value={ 5 }>5</option>
                                      <option value={ 6 }>6</option>
                                  </select>
                              </div>
                              <div className={ styles.cartdata }>
                                  { data.price }
                                  <div className={ styles.delbtn }>
                                      <button onClick={ () => { handleDel(data._id); } }>X</button>
                                  </div>
                              </div>
                          </div>
                  </div>
                      );
                  }) }
              </div>
          </div>
    </div>

  )
}
