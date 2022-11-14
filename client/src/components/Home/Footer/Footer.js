import React from 'react';
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import "./Footer.css";

const Footer = () => {
  return (
    <>    
        <footer className="new_footer_area bg_color" id='footer'>            
            <div className="footer_bottom">
                <div className="text">
                    <p className="mb-0 f_400" style={{textalign:"center"}}>© JOBER 2022 All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
  )
}
export default Footer