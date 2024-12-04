import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

function App() {
    const [selectedCharacterId, setSelectedCharacterId] = useState(null); // Track selected character ID

    const handleCharacterSelect = (characterId) => {
        setSelectedCharacterId(characterId); // Update selected character ID
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Marvel Comics Viewer</h1>
            
            {/* Render the CharacterList and pass the selection handler */}
            <CharacterList onCharacterSelect={handleCharacterSelect} />
            
            {/* Render CharacterDetail dynamically based on selected character */}
            {selectedCharacterId && <CharacterDetail characterId={selectedCharacterId} />}
        </div>
    );
}

export default App;

