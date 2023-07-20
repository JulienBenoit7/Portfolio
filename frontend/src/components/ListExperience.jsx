/* eslint-disable prettier/prettier */
import React from "react";
import Navbar from "./Navbar";

function ListExperience() {
  return (
    <>
      <Navbar />
      <div className="ListExperienceContainer">
        <h2 className="ListExperienceTitle">Experiences et formations</h2>

        <p className="ListExperienceContent">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, magnam!
          Aliquam, est ipsam aut optio exercitationem magni perferendis
          voluptatem saepe laborum, ducimus consequuntur dignissimos
          reprehenderit ipsum dicta sed amet facere.
        </p>
        <p className="ListExperienceContent">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, quia
          cumque commodi officia rem atque. Sint non dolor officia fugiat
          consequatur perferendis, porro voluptate ducimus vero fugit et,
          nesciunt dolorem?
        </p>
      </div>
    </>
  );
}

export default ListExperience;
