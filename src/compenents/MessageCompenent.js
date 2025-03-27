import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MessageComponent = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/message') // Appel au backend
            .then((response) => setMessage(response.data))
            .catch((error) => console.error('Erreur lors de l\'appel à l\'API:', error));
    }, []);

    return (
        <div>
            <h1>Message du backend</h1>
            <p>{message ? message : "Chargement en cours..."}</p>
        </div>
    );
};

export default MessageComponent;