export function createNodeStrutcture(data) {
  const positionX = 0;
  return {
    id: data.id,
    type: "default",
    data: data.name,
    position: { x: [positionX] + 150, y: 100 },
  };
}

export function restructureNodes() {}

export function default_avatar(characterGender) {
  if (characterGender === 0) {
    return "https://as2.ftcdn.net/jpg/01/31/87/13/1000_F_131871374_GBgE0Ua0PXGtOvwS9W29bTG3EB1ylaJs.jpg";
  }
  return "https://as2.ftcdn.net/jpg/01/40/46/19/1000_F_140461947_tWo9D0W8QQnrhzhCXJbDHIXblMV9BTZv.jpg";
}
