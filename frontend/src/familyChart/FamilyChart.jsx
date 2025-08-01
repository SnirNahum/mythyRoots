import { useLayoutEffect, useRef } from "react";
import { OrgChart } from "d3-org-chart";
import Loader from "../components/Loader";
import "../assets/styles/cmps/org-chart.scss";
import { getData, nodeStyle } from "./familyChartUtils";

export const FamilygChart = ({ characters, onNodeClick }) => {
  const d3Container = useRef(null);
  const chartRef = useRef(new OrgChart());

  useLayoutEffect(() => {
    const structuredData = getData(characters);

    if (d3Container.current && structuredData.length > 0) {
      d3Container.current.innerHTML = "";

      chartRef.current = new OrgChart();

      chartRef.current
        .container(d3Container.current)
        .data(structuredData)
        .nodeHeight((d) => 110)
        .nodeWidth((d) => 222)
        .childrenMargin((d) => 50)
        .compactMarginBetween((d) => 35)
        .compactMarginPair((d) => 30)
        .neighbourMargin((a, b) => 20)
        .nodeContent((d, i, arr, state) => nodeStyle(d))
        .onNodeClick((d) => onNodeClick?.(d.data))
        .initialZoom(1)
        .render();
    }
  }, [characters, onNodeClick]);

  if (!characters || characters.length === 0) {
    return <Loader />;
  }

  return (
    <div
      ref={d3Container}
      className="org-chart-container"
      style={{ width: "100%", height: "600px" }}
    />
  );
};


