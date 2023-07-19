import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="listSkills">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <li className="listPointer">Accueil</li>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/projet">
          <li className="listPointer">Projets</li>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/ListExperience"
        >
          <li className="listPointer">Experiences et formations</li>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/Skills">
          <li className="listPointer">Skills</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
