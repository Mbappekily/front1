import React, { useState } from 'react';
import "./auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
   
    password: '',
    username: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous ajouterez la logique d'authentification
    console.log('Données soumises:', formData);
    if (isLogin) {
      console.log('Tentative de connexion');
    } 
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isLogin  'Connexion' : 'Inscription'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Nom d'utilisateur</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          )}
          
          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            {isLogin ? 'Se connecter' : 'S\'inscrire'}
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Auth;