import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Loader from "../components/Loader";
import "../assets/styles/cmps/chart/org-chart.scss";
import { chartSettings, getData } from "./familyChartUtils";
import { OrgChart } from "d3-org-chart";
import { ChartActionButtons } from "../components/chart/ChartActionButtons";
import { CharactersDropdown } from "./CharactersDropdown";

export const FamilygChart = ({ characters, onNodeClick }) => {
  const [currentRoot, setCurrentRoot] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const d3Container = useRef(null);
  const chartRef = useRef(new OrgChart());

  const structuredData = useMemo(() => getData(characters), [characters]);

  useLayoutEffect(() => {
    const structuredData = getData(characters);
    if (d3Container.current && structuredData.length > 0) {
      chartSettings(
        chartRef,
        d3Container,
        structuredData,
        onNodeClick,
        setCurrentRoot
      );
    }
  }, [characters, onNodeClick]);

  useEffect(() => {
    if (selectedCharacter) {
      chartRef.current
        .clearHighlighting()
        .setCentered(selectedCharacter)
        .setHighlighted(selectedCharacter)
        .render();
    }
    if (selectedCharacter === "") {
      chartRef.current.clearHighlighting().render();
    }
  }, [selectedCharacter]);

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
      {/* <ChartActionButtons
        chartRef={chartRef}
        characters={characters}
        currentRoot={currentRoot}
      /> */}
    </div>
  );
};
