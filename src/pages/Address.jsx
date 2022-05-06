import React from "react";
import styles from "../css/address.module.css";
import { AddressFooter } from "../components/subcomponents/AddressFooter";
import { useNavigate } from "react-router-dom";


export const Address = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate("/cart/address/payment");
    };
    return (
        <div className={ styles.CheckoutContainer }>
            <div className={ styles.CheckoutBox }>
                <div>
                    <div>
                        <h3>Add shipping address</h3>
                        <p>* Required fields</p>
                    </div>
                    <form className={ styles.addForm }>
                        <div className={ styles.flexInput }>
                            <div>
                                <div>First Name</div>
                                <input type="text" name="firstName" />
                            </div>
                            <div>
                                <div>Last Name</div>
                                <input type="text" name="lastName"/>
                            </div>
                        </div>

                        <div>Country / region *</div>
                        <select name="" id="">
                            <option value="">India(USD$)</option>
                            <option value="">India(USD$)</option>
                            <option value="">India(USD$)</option>
                            <option value="">India(USD$)</option>
                            <option value="">India(USD$)</option>
                        </select>

                        <div>Address</div>
                        <input type="text" name="Address"/>
                        <input type="text" name="Address" />

                        <div className={ styles.flexInput }>
                            <div>
                                <div>City *</div>
                                <input type="text" />
                            </div>
                            <div>
                                <div>State</div>
                                <input type="text" />
                            </div>
                        </div>

                        <div className={ styles.flexInput }>
                            <div>
                                <div>Postal or zip code *</div>
                                <input type="text" name="pin" maxLength="6" pattern="[0-9]{6}" />
                            </div>
                            <div>
                                <div>Phone *</div>
                                <input type="tel" name="phone" />
                            </div>
                        </div>

                        <div className={ styles.flexCheckbox }>
                            <div>
                                <input type="checkbox" checked="checked"  />
                            </div>
                            <div>
                                <div>Use as billing address</div>
                            </div>
                        </div>
                    </form>
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
                            USD ${ "total_price" }.00
                            <br />
                            Import duties included
                        </p>
                    </div>
                    <button onClick={handleContinue } className={ styles.checkoutBtn }>
                        Save and Continue
                    </button>
                </div>
            </div>

            <AddressFooter />
        </div>
    );
};
