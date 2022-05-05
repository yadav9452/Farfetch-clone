import React, { useState } from "react";
import styles from "../css/cart.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const navigate = useNavigate();
    const [ cartItems, setCartItems ] = useState([
        {
            img: "https://cdn-images.farfetch-contents.com/17/57/32/80/17573280_39028861_170.jpg",
            id: 17573280,
            brand: "Plam Angels",
            title: "Leopard Bear cotton hoodie",
            price: 782,
            size: 36,
        },
        {
            img: "https://cdn-images.farfetch-contents.com/17/57/32/80/17573280_39028861_170.jpg",
            id: 17573280,
            brand: "Plam Angels",
            title: "Leopard Bear cotton hoodie",
            price: 782,
            size: 36,
        },
        {
            img: "https://cdn-images.farfetch-contents.com/17/57/32/80/17573280_39028861_170.jpg",
            id: 17573280,
            brand: "Plam Angels",
            title: "Leopard Bear cotton hoodie",
            price: 782,
            size: 36,
        },
        {
            img: "https://cdn-images.farfetch-contents.com/17/57/32/80/17573280_39028861_170.jpg",
            id: 17573280,
            brand: "Plam Angels",
            title: "Leopard Bear cotton hoodie",
            quantity: 1,
            price: 782,
            size: 36,
        },
    ]);

    const handleDel = (id) => {
        console.log("id", id);
    };

    const handleCheckoutCart = () => {
        navigate("/cart/address");
    };

    const handleContinueShopping = () => {
        navigate("/products");
    };

    //total price
    const total_price = cartItems.reduce((acc, current) => {
        return acc + current.price;
    }, 24);
    console.log("total", total_price);

    return (
        <div>
            <div className={ styles.header }>
                <div className={ styles.headerDivs }>
                    <h1>SHOPPING BAG</h1>
                    <div onClick={ handleContinueShopping }>Continue Shopping</div>
                </div>
            </div>

            <div className={ styles.cartContainer }>
                <div>
                    { cartItems.map((data) => {
                        return (
                            <div key={ data.id } className={ styles.cartProd }>
                                <div className={ styles.imageDiv }>
                                    <img src={ data.img } alt="" />
                                </div>
                                <div className={ styles.titleDesc }>
                                    <h3 className={ styles }>{ data.brand }</h3>
                                    <div className={ styles }>{ data.title }</div>
                                    <div className={ styles }>{ `FARFETCH ID: ${data.id}` }</div>
                                    <div>Exclusive</div>
                                </div>

                                <div>
                                    <h3 className={ styles }>$ { data.price }</h3>
                                    <div>(Import duties included)</div>
                                </div>
                                <div>
                                    Size
                                    <p className={ styles }>{ data.size }</p>
                                    <div>
                                        Quantity
                                        <div className={ styles.quantity }>
                                            <select>
                                                <option value={ 1 }>1</option>
                                                <option value={ 2 }>2</option>
                                                <option value={ 3 }>3</option>
                                                <option value={ 4 }>4</option>
                                                <option value={ 5 }>5</option>
                                                <option value={ 6 }>6</option>
                                            </select>
                                        </div>
                                        <br />
                                        <a className={ styles.wishlist } href="#">
                                            <AiOutlineHeart /> Add to wishlist{ " " }
                                        </a>
                                    </div>
                                </div>
                                <div
                                    onClick={ () => {
                                        handleDel(data.id);
                                    } }
                                >
                                    <TiDeleteOutline className={ styles.delBtn } />{ " " }
                                </div>
                            </div>
                        );
                    }) }
                </div>
                <div className={ styles.Summary }>
                    <h3>Summary</h3>
                    <div className={ styles.pymtDiv }>
                        <p>subtotal</p>
                        <p>{ `$1,077.00` }</p>
                    </div>
                    <div className={ styles.pymtDiv }>
                        <p>Delivery</p>
                        <p>{ `$24.00` }</p>
                    </div>
                    <hr />
                    <div className={ styles.pymtDiv }>
                        <p>Total</p>
                        <p>
                            USD ${ total_price }.00
                            <br />
                            Import duties included
                        </p>
                    </div>
                    <button onClick={ handleCheckoutCart } className={ styles.checkoutBtn }>
                        Go To Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};
