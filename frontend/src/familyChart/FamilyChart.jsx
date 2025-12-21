import { useMemo, useState } from "react";
import Loader from "../components/Loader";
import "../assets/styles/cmps/chart/org-chart.scss";
import { getData } from "./familyChartUtils";
import { CharactersDropdown } from "./CharactersDropdown";
import { useUniverseData } from "./useUniverseData";
import { useOrgChart } from "./useOrgChart";
import { useCharacterSelection } from "./useCharacterSelection";

export const FamilyChart = ({ onNodeClick }) => {
  const [currentRoot, setCurrentRoot] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const { characters, loading } = useUniverseData();

  const { d3Container, chartRef } = useOrgChart(
    characters,
    onNodeClick,
    setCurrentRoot
  );

  useCharacterSelection(selectedCharacter, chartRef);

  const structuredData = useMemo(() => getData(characters), [characters]);

  if (loading) return <Loader />;
  if (!characters || characters.length === 0) return <Loader />;

  return (
    <div className="main-container">
      {structuredData.length > 0 && (
        <CharactersDropdown
          characters={structuredData}
          selectedCharacter={setSelectedCharacter}
        />
      )}
      <div className="characters-chart" ref={d3Container} />
    </div>
  );
};
