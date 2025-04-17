import React, { useState, useEffect } from "react";
import "./StagiairePage.css";
import data from "../data/stagiaires"; // Chemin corrigé vers le nouveau dossier data

const StagiairePage = () => {
  const [stagiaires, setStagiaires] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [currentStagiaire, setCurrentStagiaire] = useState({
    id: null,
    nom: '',
    prenom: '',
    dateNaissance: '',
    formation: '',
    direction: '',
    dateDebut: '',
    dateFin: '',
    etablissement: ''
  });

  useEffect(() => {
    fetch('http://localhost:8080/sa')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setStagiaires(data);
      })
  }, [])

  // Charger les données au montage du composant
  useEffect(() => {
    if (data && Array.isArray(data)) {
      setStagiaires(data);
    }
  }, []);

  const handleAdd = () => {
    setIsEditing(false);
    setCurrentStagiaire({
      id: null,
      nom: '',
      prenom: '',
      dateNaissance: '',
      formation: '',
      direction: '',
      dateDebut: '',
      dateFin: '',
      etablissement: ''
    });
    setShowForm(true);
  };

  const handleEdit = (stagiaire) => {
    setIsEditing(true);
    setCurrentStagiaire({...stagiaire});
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStagiaire = {
      ...currentStagiaire,
      id: isEditing ? currentStagiaire.id : Date.now()
    };

    if (isEditing) {
      setStagiaires(prevStagiaires => 
        prevStagiaires.map(s => s.id === newStagiaire.id ? newStagiaire : s)
      );
    } else {
      setStagiaires(prevStagiaires => [...prevStagiaires, newStagiaire]);
    }
    
    setShowForm(false);
    setCurrentStagiaire({
      id: null,
      nom: '',
      prenom: '',
      dateNaissance: '',
      formation: '',
      direction: '',
      dateDebut: '',
      dateFin: '',
      etablissement: ''
    });
  };

  const handleDelete = (id) => {
    if(window.confirm('Êtes-vous sûr de vouloir supprimer ce stagiaire ?')) {
      const newStagiaires = stagiaires.filter(stagiaire => stagiaire.id !== id);
      setStagiaires(newStagiaires);
    }
  };

  return (
    <div className="stagiaire-container">
      <div className="stagiaire-header">
        <h2>Liste des Stagiaires</h2>
        <button className="btn-add" onClick={handleAdd}>+ Ajouter un stagiaire</button>
      </div>

      {showForm && (
        <div className="form-overlay">
          <form className="stagiaire-form" onSubmit={handleSubmit}>
            <h3>{isEditing ? 'Modifier' : 'Ajouter'} un stagiaire</h3>
            <input
              type="text"
              placeholder="Nom"
              value={currentStagiaire.nom}
              onChange={e => setCurrentStagiaire({...currentStagiaire, nom: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Prénom"
              value={currentStagiaire.prenom}
              onChange={e => setCurrentStagiaire({...currentStagiaire, prenom: e.target.value})}
              required
            />
            <input
              type="date"
              placeholder="Date de naissance"
              value={currentStagiaire.dateNaissance}
              onChange={e => setCurrentStagiaire({...currentStagiaire, dateNaissance: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Formation"
              value={currentStagiaire.formation}
              onChange={e => setCurrentStagiaire({...currentStagiaire, formation: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Direction de stage"
              value={currentStagiaire.direction}
              onChange={e => setCurrentStagiaire({...currentStagiaire, direction: e.target.value})}
              required
            />
            <input
              type="date"
              placeholder="Date de début"
              value={currentStagiaire.dateDebut}
              onChange={e => setCurrentStagiaire({...currentStagiaire, dateDebut: e.target.value})}
              required
            />
            <input
              type="date"
              placeholder="Date de fin"
              value={currentStagiaire.dateFin}
              onChange={e => setCurrentStagiaire({...currentStagiaire, dateFin: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Établissement"
              value={currentStagiaire.etablissement}
              onChange={e => setCurrentStagiaire({...currentStagiaire, etablissement: e.target.value})}
              required
            />
            <div className="form-buttons">
              <button type="submit">{isEditing ? 'Modifier' : 'Ajouter'}</button>
              <button type="button" onClick={() => setShowForm(false)}>Annuler</button>
            </div>
          </form>
        </div>
      )}
      
      <div className="stagiaire-list">
        {stagiaires.map(stagiaire => (
          <div key={stagiaire.id} className="stagiaire-card">
            <div className="stagiaire-info">
              <h3>{stagiaire.nom} {stagiaire.prenom}</h3>

            </div>
            <div className="stagiaire-actions">
              <button className="btn-edit" onClick={() => handleEdit(stagiaire)}>Modifier</button>
              <button className="btn-delete" onClick={() => handleDelete(stagiaire.id)}>Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StagiairePage;