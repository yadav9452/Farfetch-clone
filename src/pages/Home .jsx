import React from 'react'
import { NavImg } from '../components/HomePage/NavImg';
import HomePageDrop from '../components/HomePage/HomePageDrop';
import Navbar from '../components/Navbar/Navbar';
import { OfferNavbar } from '../components/subcomponents/OfferNavbar';

export const Home  = () => {
  return (
    <>
      <OfferNavbar />
      <Navbar />
      <NavImg />
      <HomePageDrop />
         </>
  )
}
