import React from 'react';
import FamilySelector from '../components/FamilySelector';
import { FamilyChart } from '../familyChart/FamilyChart';
import { useMythyRootsStore, useModalStore } from '../store/store';
import CharacterDetails from '../components/CharacterDetails';

const Home = () => {
    const { characters, selectedFamily, setSelectedCharacter } = useMythyRootsStore();
    const { openUniverseModal } = useModalStore();

    const familyCharacters = characters.filter(c => c.familyId === selectedFamily?.id);

    const handleNodeClick = (characterId) => {
        const character = characters.find(c => c.id === characterId);
        if (character) {
            setSelectedCharacter(character);
            openUniverseModal(<CharacterDetails />);
        }
    };

    return (
        <div>
            <FamilySelector />
            <FamilyChart characters={familyCharacters} onNodeClick={handleNodeClick} />
        </div>
    );
};

export default Home;
