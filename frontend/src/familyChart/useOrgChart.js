import { useLayoutEffect, useRef } from "react";
import { OrgChart } from "d3-org-chart";
import { chartSettings, getData } from "./familyChartUtils";

/**
 * Custom hook to initialize and manage the D3 org chart
 */
export const useOrgChart = (characters, onNodeClick, setCurrentRoot) => {
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
  }, [characters, onNodeClick, setCurrentRoot]);

  return { d3Container, chartRef };
};
