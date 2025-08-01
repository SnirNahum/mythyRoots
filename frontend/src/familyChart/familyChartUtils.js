export function nodeStyle(d) {
   return `
    <div class="node-container">
      <div class="node-card">
        <div class="node-badge-bg"></div>
        <div class="node-avatar" >
          <img src="${d.data.image}" />
        </div>
        <div class="node-name">${d.data.name}</div>
        <div class="node-title">${d.data.title}</div>
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
      title: character.bio || "",
      image: "https://picsum.photos/200",
      parentId: parentId || null,
    };
  });
}