import React, { useState } from "react";
import {FaCartPlus} from "react-icons/fa";
import "../../css/Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile} from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
      <div className="Nav-container">
      
    <nav className="main-nav">
      {/* 1st logo part consisit of Menu*/}

      
      
      <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
        <ul>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
        </ul>
      </div>

      {/* 2nd part Title*/}
       
      <div className="logo">
        <h2>
          FarFetch
        </h2>
      </div>

      {/* 3rd parts Social Media connections */}
      <div className="social-media">
        <ul className="social-media-desktop">
          <li>
            <a href="https://www.google.com" target={"#"}>
              {" "}
              <CgProfile/>{" "}
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target={"#"}>
              {" "}
              <AiOutlineHeart />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target={"#"}>
              {" "}
              <FaCartPlus />{" "}
            </a>
          </li>
        </ul>
        {/* hamburget menu start  */}
        <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        
      </div>
      </nav>
      <  div class="search-container">
      <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
      </div>
      </div>
  );
};

export default Navbar;
