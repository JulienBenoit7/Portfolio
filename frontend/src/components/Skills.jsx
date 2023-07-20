/* eslint-disable prettier/prettier */
import React from "react";
import Navbar from "./Navbar";

function Skills() {
  return (
    <>
      <Navbar />
      <div className="Skills">
        <h2>Hard skills / Soft Skills / Centres d'interets</h2>

        <div className="Card">
          <p>
            <h3>Hard skills</h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
            magnam! Aliquam, est ipsam aut optio exercitationem magni
            perferendis voluptatem saepe laborum, ducimus consequuntur
            dignissimos reprehenderit ipsum dicta sed amet facere.
          </p>
        </div>

        <div className="Card">
          <p>
            <h3>Centres d'interets</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, quia
            cumque commodi officia rem atque. Sint non dolor officia fugiat
            consequatur perferendis, porro voluptate ducimus vero fugit et,
            nesciunt dolorem?
          </p>
        </div>

        <div className="Card">
          <p>
            <h3>Soft Skills</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, quia
            cumque commodi officia rem atque. Sint non dolor officia fugiat
            consequatur perferendis, porro voluptate ducimus vero fugit et,
            nesciunt dolorem?
          </p>
        </div>
      </div>
    </>
  );
}

export default Skills;
