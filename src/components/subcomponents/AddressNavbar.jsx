import React from 'react'
import './AddressNavbar.css'
 
import {BsTelephone} from 'react-icons/bs'
import {FiLock} from 'react-icons/fi'

export  const AddressNavbar =() =>{
  return (
    <div className='Navbox'>
  
      <div className='Navbox-left'>
     <FiLock className='lock'/>
 
      <p>Secure checkout</p>
    <div>  
    <img src="https://seal.digicert.com/seals/cascade/?tag=ajg0KWDT&referer=secure.farfetch.com&format=png&lang=en&an=min" alt="" />
    </div>
      <h1>FARFETCH</h1>

      <p2><b>Need Help?</b> </p2>
       
       <BsTelephone className='tele'/>
      <p3>+1 646 791 3768</p3>
    </div>
    </div>
  )
}
