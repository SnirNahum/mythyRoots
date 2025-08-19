import { default_avatar } from "../components/Utils.jsx/utils";

import { OrgChart } from "d3-org-chart";

export function nodeStyle(d) {
  return `
    <div class="node-container">
      <div class="node-card">
        <div class="node-badge-bg"></div>
        <div class="node-avatar" >
          <img src="${d.data.image}" />
        </div>
        <div class="node-name ellipsis">${d.data.name}</div>
        <div class="node-title ellipsis">${d.data.title}</div>
      </div>
    </div>
  `;
}

export function getData(characters) {
  return characters.map((character) => {
    let parentId = null;
    if (character.incomingRelations[0]?.source_id) {
      parentId = character.incomingRelations[0].source_id.toString();
    }

    return {
      id: character.id,
      name: character.name || "Unknown",
      title: character.bio || "N/A",
      image: character.image || default_avatar(character.gender),
      gender: character.gender,
      parentId,
    };
  });
}
export function chartSettings(
  chartRef,
  d3Container,
  structuredData,
  onNodeClick,
  setCurrentRoot
) {
  let compact = 0;
  chartRef.current = new OrgChart();
  d3Container.current.innerHTML = "";

  chartRef.current
    .container(d3Container.current)
    .data(structuredData)
    .nodeId((d) => d.id)
    .nodeHeight((d) => 110)
    .nodeWidth((d) => 222)
    .childrenMargin((d) => 50)
    .compactMarginBetween((d) => 35)
    .compactMarginPair((d) => 30)
    .neighbourMargin((a, b) => 20)
    .nodeContent((d, i, arr, state) => nodeStyle(d))
    .onNodeClick((d) => {
      setCurrentRoot(d.id);
    })
    .initialZoom(1)
    .compact(!!(compact++ % 2))
    .render();
}

export function filterChart(value = "", chartRef) {
  const chart = chartRef?.current;
  const data = chart.data();
  if (!chart) return;

  value = value.trim().toLowerCase();

  for (const d of data) {
    d._expanded = false;
    d._highlighted = false;
  }
  if (value) {
    for (const d of data) {
      const name = (d?.name || d?.data?.name || "").toLowerCase();
      if (name.includes(value)) {
        d._highlighted = true;
        d._expanded = true;
      }
    }
  }

  chart.data(data).render().fit();
}
