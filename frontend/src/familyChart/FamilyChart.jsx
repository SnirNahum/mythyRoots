import { useLayoutEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import "../assets/styles/cmps/chart/org-chart.scss";
import { chartSettings, getData, nodeStyle } from "./familyChartUtils";
import { OrgChart } from "d3-org-chart";
import { ChartActionButtons } from "../components/chart/ChartActionButtons";

export const FamilygChart = ({ characters, onNodeClick }) => {
  const [currentRoot, setCurrentRoot] = useState("");

  const d3Container = useRef(null);
  const chartRef = useRef(new OrgChart());
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

  if (!characters || characters.length === 0) {
    return <Loader />;
  }

  return (
    <div className="chart-container">
      <div
        ref={d3Container}
        className="org-chart-container"
        style={{ width: "100%", height: "600px" }}
      />
      
        <ChartActionButtons
          chartRef={chartRef}
          characters={characters}
          currentRoot={currentRoot}
        />
    </div>
  );
};
