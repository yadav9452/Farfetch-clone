import React from 'react';
import './AddressNavbar.css';

import { BsTelephone } from 'react-icons/bs';
import { FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export const AddressNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className='Navbox'>

      <div className='Navbox-left'>

        <div>
          <FiLock className='lock' />
          <p>Secure checkout</p>
        </div>

        <div>
          <p onClick={ () => { navigate('/') }}>FARFETCH</p>
        </div>

        <div >
          <p><b>Need Help?</b> </p>
          
          <p> <BsTelephone className='tele' /> +1 646 791 3768</p>
        </div>

      </div>
    </div>
  );
};
