import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';
import NotFound from './NotFound';
import NavigationBar from './NavigationBar';

function App() {
  const [recentCharacters, setRecentCharacters] = useState([]);

  const handleCharacterSelect = (character) => {
    setRecentCharacters((prev) => {
      const updated = [character, ...prev.filter((item) => item.id !== character.id)];
      return updated.slice(0, 3); // Keep only the last 3 unique characters
    });
  };

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route 
          path="/character-list" 
          element={<CharacterList onCharacterSelect={handleCharacterSelect} />} 
        />
        <Route 
          path="/character-details/:characterId" 
          element={<CharacterDetails recentCharacters={recentCharacters} />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
