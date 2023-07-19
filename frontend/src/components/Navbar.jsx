import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="listSkills">
        <Link to="/">
          <li className="listPointer">Accueil</li>
        </Link>
        <Link to="/projet">
          <li className="listPointer">Projets</li>
        </Link>
        <Link to="/ListExperience">
          <li className="listPointer">Experiences et formations</li>
        </Link>
        <Link to="/Skills">
          <li className="listPointer">Skills</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
