import { Route, Routes } from "react-router-dom";
import { NavImg } from "../components/HomePage/Card";
import Navbar from '../components/Navbar/Navbar';
import { CartPage } from '../pages/Cart';
import { Payment } from "../pages/Payment";
import { Address } from "../pages/Address";
import Women from "../pages/women";
import Men from "../pages/men";
import Account from "../pages/Account";
import CustomizedDialogs from "../components/Navbar/dialog";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";
import { OfferNavbar } from "../components/subcomponents/OfferNavbar";

export const AllRoutes = () => {
   
    return (
        <div>
            <OfferNavbar />
            <Navbar />
            <NavImg />
            <Routes>
                <Route path="/cart" element={ <CartPage /> } />
                <Route path="/cart/address/payment" element={ <Payment /> } />
                <Route path="/cart/address" element={ <Address /> } />
                <Route path="/womens" element={ <Women /> } />
                <Route path="/mens" element={ <Men /> } />
                <Route path="/account" element={ <CustomizedDialogs ><Account />
                </CustomizedDialogs> } />
                <Route path="/products/:id" element={ <ProductDetails /> } />

            </Routes>
        </div>
    );
};