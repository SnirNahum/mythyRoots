import { DynamicIcon } from "lucide-react/dynamic";
import { useModalStore } from "../store/store";

const UniverseCardItem = ({ universe, isUniverseModal, onClick }) => {
  const closeUniverseModal = useModalStore((state) => state.closeUniverseModal);

  function onClickHandler() {
    // Call the onClick prop to set the current universe
    if (onClick) {
      onClick(universe);
    }
    // Close the modal after selection
    closeUniverseModal();
  }

  return (
    <div className="universe-card" onClick={onClickHandler}>
      <div
        className="card-header"
        style={{ backgroundColor: universe.background_color }}
      >
        <h3 className="card-header-title">{universe.name}</h3>

        {isUniverseModal && <DynamicIcon name={universe.icon} size={30} />}
      </div>

      <div className="card-body">
        <p className="card-description">{universe.description}</p>
      </div>
    </div>
  );
};

export default UniverseCardItem;
