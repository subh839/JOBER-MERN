import React from "react";
import { FaLinkedinIn, FaTwitter,FaInstagram, FaFacebook} from "react-icons/fa";
import { GrFacebookOption, GrGithub } from "react-icons/gr";

import "./Team.css";

const Team = () => {
  return (
    <>
      <div className="container" id="team">

        <h2 className="team_header">Our Social Media Account</h2>

        <div className="teamcards_parent" style={{textalign:"center", marginLeft:"80px"}}>


          <div className="teamdetailcardinfo">
            <div className="teamdetailcard">
              <div className="teamdetailabout" >
        
                <div className="values-list" >
                  <button className="icon">
                  
                    <FaInstagram color="blue" size={30}/>
                  </button>
                  <button className="icon" >
                    <FaLinkedinIn size={30}/>
                  </button>
                  <button className="icon" >
                    <FaTwitter size={30}/>
                  </button>
                  <button className="icon" >
                    <FaFacebook size={30}/>
                  </button>
                
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </>
  );
};

export default Team;
