import React, { useState } from 'react';
import "./Stagiaire.css";


function StagiaireForm() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    DateNaissance: '',
    Adresse: '',
    Telephone: '',
    email: '',
    specialite: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Données du stagiaire:', formData);
    // Vous pouvez ajouter ici la logique pour envoyer les données à un serveur
  };

  return (
    <form onSubmit={handleSubmit}>
       
        
      <div>
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="DateNaissance">Date de Naissance :</label>
        <input
          type="date"
          id="DateNaissance"
          name="DateNaissance"
          value={formData.DateNaissance}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="Adresse">Adresse :</label>
        <input
          type="text"
          id="Adresse"
          name="Adresse"
          value={formData.Adresse}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="Telephone">Téléphone :</label>
        <input
          type="tel"
          id="Telephone"
          name="Telephone"
          value={formData.Telephone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="specialite">Spécialité :</label>
        <input
          type="text"
          id="specialite"
          name="specialite"
          value={formData.specialite}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description :</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default StagiaireForm;