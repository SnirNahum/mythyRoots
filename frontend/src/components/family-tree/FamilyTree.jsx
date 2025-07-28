import { FamDiagram } from "basicprimitivesreact";
import {
  GroupByType,
  PageFitMode,
  Enabled,
  OrientationType ,
} from "basicprimitives";

import { useMythyRootsStore } from "../../store/store";
import Loader from "../Loader";

const a =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/640px-ChessSet.jpg";
const FamilyTree = () => {
  const currentUniverseCharacters = useMythyRootsStore(
    (state) => state.currentUniverseCharacters
  );
  if (currentUniverseCharacters.length === 0) {
    return <Loader />;
  }
  const data = getData(currentUniverseCharacters);
  const config = {
    pageFitMode: PageFitMode.None,
    PageFitMode: PageFitMode.Page,
    linesWidth: 2,
    linesColor: "black",
    hasSelectorCheckbox: Enabled.False,
    normalLevelShift: 50,
    dotLevelShift: 20,
    lineLevelShift: 20,
    normalItemsInterval: 50,
    dotItemsInterval: 50,
    lineItemsInterval: 50,
    arrowsDirection: GroupByType.Childrens,
    showExtraArrows: false,
    orientationType: OrientationType.Top,
    items: data,
    cursorItem: data[0].id, // or any visible character id
  centerOnCursor: true,
  };

  return (
    <div className="placeholder" style={{ width: "100%", height: "600px" }}>
      <FamDiagram centerOnCursor={true} config={config} />
    </div>
  );
};

function getData(currentUniverseCharacters) {
  const data = currentUniverseCharacters.map((character) => {
    const parents =
      character.incomingRelations.map((rel) => rel.source_id) || [];
    return {
      id: character.id,
      title: character.name,
      label: character.bio,
      description: character.bio,
      image: character.image_url || a,
      parents,
    };
  });

  return data;
}
export default FamilyTree;
