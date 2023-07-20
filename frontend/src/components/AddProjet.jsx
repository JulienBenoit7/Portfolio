/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import "../App.css";

function AddProjet() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleAddProjet = async () => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/projets`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            description,
            url,
          }),
        }
      );

      if (response.ok) {
        setMessage("Projet ajoutée avec succès !");
        setName("");
        setDescription("");
        setUrl("");
      } else {
        throw new Error("Erreur lors de l'ajout du projet");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du projet :", error);
    }
  };

  return (
    <div className="add-projet-container">
      <h1>Ajouter un projet</h1>

      <div>
        <label className="add-projet-label" htmlFor="name">
          Nom :
        </label>
        <input
          className="add-projet-input"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div>
        <label className="add-projet-label" htmlFor="description">
          Description :
        </label>
        <textarea
          className="add-projet-input add-projet-textarea"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>

      <div>
        <label className="add-projet-label" htmlFor="url">
          URL :
        </label>
        <input
          className="add-projet-input"
          type="text"
          id="url"
          value={url}
          onChange={handleUrlChange}
        />
      </div>

      <button
        className="add-projet-button"
        type="button"
        onClick={handleAddProjet}
      >
        Ajouter du projet
      </button>

      {message && <p className="add-projet-message">{message}</p>}
    </div>
  );
}

export default AddProjet;
