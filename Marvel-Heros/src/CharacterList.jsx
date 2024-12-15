import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CharacterList({ onCharacterSelect }) {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacters = async () => {
      const PUBLIC_KEY = '4ab805c65c4402360e4572c3a376eb0c'; 
      const HASH = '314f1d00a835e607982461ad239a7481'; 
      const URL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

      try {
        const response = await axios.get(URL);
        setHeroes(response.data.data.results);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false); 
    };

    fetchCharacters();
  }, []);

  const handleCharacterClick = (hero) => {
    onCharacterSelect(hero); // Call the prop to update recentCharacters in App
    navigate(`/character-details/${hero.id}`); // Navigate to the details page
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Character List</h2>

      {loading && <p>Loading characters...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px'
      }}>
        {heroes.map((hero) => (
          <div 
            key={hero.id} 
            style={{
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '10px', 
              textAlign: 'center',
              cursor: 'pointer'
            }}
            onClick={() => handleCharacterClick(hero)}
          >
            <img 
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} 
              alt={hero.name} 
              style={{ width: '100%', borderRadius: '8px' }} 
            />
            <h3 style={{ fontSize: '16px', margin: '10px 0' }}>{hero.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
