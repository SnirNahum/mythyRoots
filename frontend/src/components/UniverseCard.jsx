// components/UniverseCard/UniverseCardList.jsx
import UniverseCardItem from "./UniverseCardItem";

import FilterNotFound from "./FilterNotFound";
import { UNIVERSE } from "../utils/SavedWords";
import { useMythyRootsStore } from "../store/store";

const UniverseCardList = ({
  filteredUniverses,
  isUniverse: isUniverseModal = true,
}) => {
  const { setCurrentUniverse } = useMythyRootsStore();

  const handleSelect = (universe) => {
    setCurrentUniverse(universe);
  };

  if (filteredUniverses.length < 1) {
    return <FilterNotFound filterName={UNIVERSE} />;
  }

  return (
    <div className="card-container">
      {filteredUniverses.map((universe) => (
        <UniverseCardItem
          key={universe.id ?? universe.name}
          universe={universe}
          isUniverseModal={isUniverseModal}
          onClick={() => handleSelect(universe)}
        />
      ))}
    </div>
  );
};

export default UniverseCardList;
