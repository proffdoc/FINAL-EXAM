import React, { useState } from 'react'
import { Image } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
import { CiHeart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";


const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  return (
    <header>
        <div className="container">
            <div className="header-top">
            <Image src='gibbresh.png' fallbackSrc='https://preview.colorlib.com/theme/wines/images/logo.png.webp' height={"80px"}  gap={"2rem"}/>
            </div>
            <div className="header-bottom">
                <ul>
                    <li><NavLink to={"/"}>HOME</NavLink></li>
                    <li><NavLink to={"/about"}>ABOUT</NavLink></li>
                    <li><NavLink to={"/wines"}>WINES</NavLink></li>
                    <li><NavLink to={"/shop"}>SHOP</NavLink></li>
                    <li><NavLink to={"/contact"}>CONTACT</NavLink></li>
                </ul>
                <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
                <div className="icons">
                <NavLink to={"/wishlist"}><CiHeart fontSize={"40px"}/></NavLink>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header