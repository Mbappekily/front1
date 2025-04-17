import React, { useState } from 'react';
import './StageForm.css';

const StageForm = () => {
  const [formData, setFormData] = useState({
    titre: '',
    type: '',
    joursReception: '',
    typePriseEnCharge: '',
    dateDebut: '',
    dateFin: '',
    duree: '',
    theme: '',
    encadrant: '',
    direction: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="stage-form-container animate-in">
      <h2>Veuillez saisir les information du stage :</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group fade-in">
            <label>Titre :</label>
            <input type="text" name="titre" />
          </div>
          <div className="form-group fade-in">
            <label>Type :</label>
            <select name="type">
              <option value="">- Sélectionner le type -</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group fade-in">
            <label>Jours de réception :</label>
            <input type="text" name="joursReception" />
          </div>
          <div className="form-group fade-in">
            <label>Type de Prise en Charge :</label>
            <input type="text" name="typePriseEnCharge" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group fade-in">
            <label>Date début :</label>
            <input type="date" name="dateDebut" placeholder="DD/MM/YYYY" />
          </div>
          <div className="form-group fade-in">
            <label>Date fin :</label>
            <input type="date" name="dateFin" placeholder="DD/MM/YYYY" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group fade-in">
            <label>Durée :</label>
            <input type="text" name="duree" />
          </div>
          <div className="form-group fade-in">
            <label>Thème :</label>
            <select name="theme">
              <option value="">- Sélectionner le thème -</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group fade-in">
            <label>Encadrant :</label>
            <select name="encadrant">
              <option value="">- Sélectionner l'encadrant -</option>
            </select>
          </div>
          <div className="form-group fade-in">
            <label>Direction:</label>
            <select name="direction">
              <option value="">- Sélectionner la direction -</option>
            </select>
          </div>
        </div>

        <div className="form-submit">
          <button type="submit" className="btn-ajouter">Ajouter</button>
        </div>
      </form>
    </div>
  );
};

export default StageForm;