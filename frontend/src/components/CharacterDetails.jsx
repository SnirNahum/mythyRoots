import React from 'react';
import { useMythyRootsStore } from '../store/store';

const CharacterDetails = () => {
    const { selectedCharacter, characters } = useMythyRootsStore();

    if (!selectedCharacter) {
        return <div>No character selected.</div>;
    }

    const getCharacterName = (id) => {
        const character = characters.find(c => c.id === id);
        return character ? character.name : 'Unknown';
    };

    return (
        <div className="character-details">
            <h2>{selectedCharacter.name}</h2>
            <p><strong>Parents:</strong> {selectedCharacter.parents.map(getCharacterName).join(', ')}</p>
            <p><strong>Spouse:</strong> {selectedCharacter.spouse.map(getCharacterName).join(', ')}</p>
            <p><strong>Children:</strong> {selectedCharacter.children.map(getCharacterName).join(', ')}</p>
        </div>
    );
};

export default CharacterDetails;
