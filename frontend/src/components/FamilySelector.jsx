import React from 'react';
import { useMythyRootsStore } from '../store/store';

const FamilySelector = () => {
    const { families, currentUniverse, selectedFamily, setSelectedFamily } = useMythyRootsStore();

    const handleFamilyChange = (event) => {
        const familyId = event.target.value;
        const family = families.find(f => f.id === familyId);
        setSelectedFamily(family || {});
    };

    const familiesInUniverse = families.filter(f => f.universeId === currentUniverse?.id);

    return (
        <div className="family-selector">
            <select onChange={handleFamilyChange} value={selectedFamily?.id || ''}>
                <option value="" disabled>Select a Family</option>
                {familiesInUniverse.map(family => (
                    <option key={family.id} value={family.id}>
                        {family.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FamilySelector;
