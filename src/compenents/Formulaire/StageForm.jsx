import React, { useState } from "react";
import "../../index.css";

const StageForm = () => {
  const [formData, setFormData] = useState({
    titre: "",
    type: "",
    joursReception: "",
    typePriseEnCharge: "",
    dateDebut: "",
    dateFin: "",
    duree: "",
    theme: "",
    encadrant: "",
    direction: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du stage:", formData);
    alert("Formulaire ajouter avec succès !");
  
   
  };

  return (
    <div className="stage-form-wrapper">
      <h1>Veuillez saisir les information du stage :</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Titre :</label>
            <input
              type="text"
              name="titre"
              value={formData.titre}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Type :</label>
            <select 
              name="type" 
              value={formData.type}
              onChange={handleChange}
            >
              <option value="">- Selectionner le type -</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Jours de réception :</label>
            <input
              type="text"
              name="joursReception"
              value={formData.joursReception}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Type de Prise en Charge :</label>
            <input
              type="text"
              name="typePriseEnCharge"
              value={formData.typePriseEnCharge}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date debut :</label>
            <input
              type="date"
              name="dateDebut"
              placeholder="DD/MM/YYYY"
              value={formData.dateDebut}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Date fin :</label>
            <input
              type="date"
              name="dateFin"
              placeholder="DD/MM/YYYY"
              value={formData.dateFin}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Duree :</label>
            <input
              type="text"
              name="duree"
              value={formData.duree}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Theme :</label>
            <select
              name="theme"
              value={formData.theme}
              onChange={handleChange}
            >
              <option value="">- Selectionner le theme -</option>
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
              <option value="theme3">Theme 3</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Encadrant :</label>
            <select
              name="encadrant"
              value={formData.encadrant}
              onChange={handleChange}
            >
              <option value="">- Selectionner l'encadrant -</option>
              <option value="encadrant1">Encadrant 1</option>
              <option value="encadrant2">Encadrant 2</option>
              <option value="encadrant3">Encadrant 3</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Direction:</label>
            <select
              name="direction"
              value={formData.direction}
              onChange={handleChange}
            >
              <option value="">- Selectionner la direction -</option>
              <option value="direction1">Direction 1</option>
              <option value="direction2">Direction 2</option>
              <option value="direction3">Direction 3</option>
            </select>
          </div>
        </div>

        <div className="form-submit">
          <button type="submit" className="btn-ajouter">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
};

export default StageForm;