/* eslint-disable prettier/prettier */
import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Logo from "../image/logojb.png";

function Home() {
  return (
    <div className="HomeContainer">
      <div className="HomeContent">
        <img className="HomeLogo" src={Logo} alt="logo jb" />
        <h2 className="HomeText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          cupiditate iste illo laboriosam.
        </h2>
        <div className="SocialLinks">
          <a href="/#" className="SocialLink">
            <FaTwitter />
          </a>
          <a href="/#" className="SocialLink">
            <FaFacebook />
          </a>
          <a href="/#" className="SocialLink">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
