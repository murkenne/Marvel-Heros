import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CharacterDetail({ characterId }) {
    const [characterDetails, setCharacterDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            const PUBLIC_KEY = '4ab805c65c4402360e4572c3a376eb0c'; // Replace with your actual public key
            const HASH = '314f1d00a835e607982461ad239a7481'; // Replace with the generated hash
            const URL = `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

            try {
                const response = await axios.get(URL);
                setCharacterDetails(response.data.data.results[0]); // Get character details
            } catch (err) {
                setError(err.message);
            }
            setLoading(false); // Update loading state after fetch
        };

        fetchCharacterDetails();
    }, [characterId]);

    if (loading) return <p>Loading character details...</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
    if (!characterDetails) return null;

    return (
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h2>{characterDetails.name}</h2>
            <p>{characterDetails.description || 'No description available.'}</p>

            <h3>Comics:</h3>
            <ul>
                {characterDetails.comics.items.map((comic) => (
                    <li key={comic.resourceURI}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CharacterDetail;
