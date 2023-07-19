/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";

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
  }, []);

  return (
    <div>
      {listProjet.map((projet) => (
        <p key={projet.id}>{projet.name}</p>
      ))}
    </div>
  );
}
