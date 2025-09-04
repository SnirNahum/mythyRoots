import { useState } from "react";
import UniverseCard from "./UniverseCard";
import UniverseFilter from "./UniverseFilter";
import { NAME } from "../utils/SavedWords";
import { useMythyRootsStore } from "../store/store";

const CardsPage = ({ onClose }) => {
  const universes = useMythyRootsStore((state) => state.universes);
  const [filteredUniverses, setFilteredUniverses] = useState(universes);

  const onChangeHandler = (filteredUniverse) => {
    const filter = universes.filter((universe) =>
      universe[NAME].toLowerCase().startsWith(filteredUniverse.toLowerCase())
    );
    setFilteredUniverses(filter);
  };

  return (
    <div className="universe-modal-content">
      <UniverseFilter universes={universes} universeFilter={onChangeHandler} />
      <UniverseCard filteredUniverses={filteredUniverses} onClose={onClose} />
    </div>
  );
};

export default CardsPage;
