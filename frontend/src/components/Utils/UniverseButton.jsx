// UniverseButton.jsx
import { useModalStore } from "../../store/store";
import CardsPage from "../CardsPage";
import { UNIVERSES } from "../../utils/SavedWords";
const UniverseButton = () => {
  const openUniverseModal = useModalStore((s) => s.openUniverseModal);

  return (
    <button
      onClick={() => openUniverseModal(<CardsPage />)}
      className="btn-universe-button"
    >
      <p>{UNIVERSES?.toUpperCase()}</p>
      <div className="container-stars">
        <div className="stars"></div>
      </div>
      <div className="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
};

export default UniverseButton;
