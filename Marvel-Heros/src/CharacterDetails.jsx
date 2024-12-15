import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CharacterDetails({ recentCharacters }) {
  const { characterId } = useParams();
  const [characterDetails, setCharacterDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      const PUBLIC_KEY = '4ab805c65c4402360e4572c3a376eb0c'; 
      const HASH = '314f1d00a835e607982461ad239a7481'; 
      const URL = `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

      try {
        const response = await axios.get(URL);
        setCharacterDetails(response.data.data.results[0]);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchCharacterDetails();
  }, [characterId]);

  if (loading) return <p>Loading character details...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

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

      <h3>Recently Viewed Characters</h3>
      <div style={{
        display: 'flex',
        gap: '10px',
        marginTop: '20px'
      }}>
        {recentCharacters.map((hero) => (
          <div key={hero.id} style={{ textAlign: 'center' }}>
            <img 
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} 
              alt={hero.name} 
              style={{ width: '80px', borderRadius: '50%' }} 
            />
            <p>{hero.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterDetails;
