const UniverseFilter = ({ universeFilter }) => {
  return (
    <div className="universe-input-container">
      <input
        onChange={(e) => universeFilter(e.target.value.trim())}
        placeholder="Search for universe..."
        type="text"
        autoComplete="off"
        spellCheck="false"
        name="text"
        className="universe-input"
      />
    </div>
  );
};

export default UniverseFilter;
