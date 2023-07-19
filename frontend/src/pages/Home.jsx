/* eslint-disable prettier/prettier */
import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../image/logojb.png";

function Home() {
  return (
    <nav>
      <Navbar />
      <img src={Logo} alt="logo jb" />
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        cupiditate iste illo laboriosam. Natus obcaecati cumque ducimus
        dignissimos asperiores ipsa magni necessitatibus quas. Molestiae nemo
        odio repellendus error possimus autem!
      </h2>
    </nav>
  );
}

export default Home;
