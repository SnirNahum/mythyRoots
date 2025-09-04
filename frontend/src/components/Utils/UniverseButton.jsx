import { UNIVERSES } from "../../utils/SavedWords";

const UniverseButton = ({ handleOpen }) => {
  return (
    <button
      onClick={handleOpen}
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
