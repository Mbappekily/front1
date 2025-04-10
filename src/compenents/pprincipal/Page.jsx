import React, { useState } from 'react';
import "./Page.css";

const BarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuChoix = [
    { id: 1, name: "Profil" },
    { id: 2, name: "Authentification" },
    { id: 3, name: "Stagiaire / Apprenti" },
    { id: 4, name: "Documents" },
    { id: 5, name: "Fiche de position" },
    { id: 6, name: "Stage" }
  ];

  return (
    <div className="dashboard-container">
      <button 
        className="menu-button"
        onClick={toggleMenu}
      >
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </button>

      <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <h2 className="barmenu-title">Tableau de bord</h2>
        <ul className="menu-list">
          {menuChoix.map(choix => (
            <li key={choix.id} className="menu-item">
              {choix.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="main-content">
        <div className="content-card">
          <h2>Bienvenue sur votre Tableau de bord</h2>
          <p>Sélectionnez une option dans le menu pour commencer.</p>
        </div>
      </div>
    </div>
  );
};

export default BarMenu;