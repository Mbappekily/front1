import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaUserGraduate, FaFileAlt, FaClipboardList, FaBookReader } from 'react-icons/fa';
import "./Page.css";

const BarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const menuChoix = [
    { id: 1, name: "Profil", icon: <FaUser />, path: "/profil" },
    { id: 2, name: "Authentification", icon: <FaLock />, path: "/auth" },
    { id: 3, name: "Stagiaire / Apprenti", icon: <FaUserGraduate />, path: "/stagiaire" },
    { id: 4, name: "Documents", icon: <FaFileAlt />, path: "/documents" },
    { id: 5, name: "Fiche de position", icon: <FaClipboardList />, path: "/fiche" },
    { id: 6, name: "Stage", icon: <FaBookReader />, path: "/stage" }
  ];

  return (
    <div className="dashboard-container">
      <button 
        className={`menu-button ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </button>

      <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <h2 className="barmenu-title">Gestion Stagiaires</h2>
        <ul className="menu-list">
          {menuChoix.map((choix, index) => (
            <li 
              key={choix.id} 
              className="menu-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleMenuClick(choix.path)}
            >
              <span className="menu-icon">{choix.icon}</span>
              <span className="menu-text">{choix.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BarMenu;