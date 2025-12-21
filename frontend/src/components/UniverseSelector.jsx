import React from 'react';
import { useMythyRootsStore } from '../store/store';

const UniverseSelector = () => {
    const { universes, currentUniverse, setCurrentUniverse } = useMythyRootsStore();

    const handleUniverseChange = (event) => {
        const universeId = event.target.value;
        const universe = universes.find(u => u.id === universeId);
        setCurrentUniverse(universe || {});
    };

    return (
        <div className="universe-selector">
            <select onChange={handleUniverseChange} value={currentUniverse?.id || ''}>
                <option value="" disabled>Select a Universe</option>
                {universes.map(universe => (
                    <option key={universe.id} value={universe.id}>
                        {universe.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default UniverseSelector;
