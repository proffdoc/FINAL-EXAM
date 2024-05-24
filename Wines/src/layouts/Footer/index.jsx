import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import "./index.scss"


const Footer = () => {
  return (
    <div>
      <div className="container">
       <div className="footer-top">
       <ul>
          <li><a href='#'><FaFacebook /></a></li>
          <li><a href='#'><FaTwitter /></a></li>
          <li><a href='#'><FaYoutube /></a></li>
          <li><a href='#'><FaInstagram /></a></li>
        </ul>
       </div>
       <div className="footer-bottom">
        <div>Copyright ©2024 All rights reserved | This template is made with <FaHeart color='red'/> by Colorlib</div>
       </div>
        </div>
        </div>
  )
}

export default Footer