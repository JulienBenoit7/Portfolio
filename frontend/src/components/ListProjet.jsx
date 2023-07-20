/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListProjet() {
  const [listProjet, setListProjet] = useState([]);
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? `http://localhost:5000`}/projets`
    )
      .then((res) => res.json())
      .then((data) => {
        setListProjet(data);
      });

    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? `http://localhost:5000`
      }/language/projet/1`
    ).then((res) => res.json());
  }, []);

  return listProjet.map((projet) => (
    <Link to={projet.url}>
      <h2>{projet.name}</h2>
      <p>{projet.description}</p>
    </Link>
  ));
}
