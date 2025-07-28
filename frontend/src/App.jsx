import { useEffect } from "react";
import "./App.css";
import "./assets/styles/main.scss";
import AppFooter from "./components/AppFooter.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { httpService } from "./services/httpService.js";
import {
  CHARACTERS_UNIVERSE,
  DB_UNIVERSES,
  RELATIONSHIPS_UNIVERSE,
} from "./utils/SavedWords.jsx";
import { useMythyRootsStore } from "./store/store.js";
import FamilyTree from "./components/family-tree/FamilyTree.jsx";

function App() {
  const {
    setAllUniverses,
    setUniverseCharacters,
    currentUniverse,
    setCurrentRelationships,
  } = useMythyRootsStore();

  useEffect(() => {
    const getUniverses = async () => {
      const universes = await httpService.get(DB_UNIVERSES);
      setAllUniverses(universes);
    };
    getUniverses();
  }, [setAllUniverses]);

  useEffect(() => {
    const getUniverseCharacters = async () => {
      if (currentUniverse?.id) {
        const res = await httpService.get(
          `${CHARACTERS_UNIVERSE}${currentUniverse.id}`
        );
        setUniverseCharacters(res.body);
      }
    };
    getUniverseCharacters();
  }, [currentUniverse?.id, setUniverseCharacters]);

  useEffect(() => {
    const getCharactersRelationships = async () => {
      if (currentUniverse?.id) {
        const res = await httpService.get(
          `${RELATIONSHIPS_UNIVERSE}${currentUniverse.id}`
        );

        setCurrentRelationships(res.body);
      }
    };
    getCharactersRelationships();
  }, [currentUniverse?.id, setUniverseCharacters]);

  return (
    <div className="main-layout">
      <NavBar />
      <FamilyTree />
      <AppFooter />
    </div>
  );
}

export default App;
