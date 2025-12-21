import { useEffect } from "react";
import "./App.css";
import "./assets/styles/main.scss";
import AppFooter from "./components/AppFooter.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { httpService } from "./services/httpService.js";
import { DB_UNIVERSES } from "./utils/SavedWords.jsx";
import { useMythyRootsStore } from "./store/store.js";
import { FamilyChart } from "./familyChart/FamilyChart.jsx";
import ModalController from "./components/Utils/Modals/ModalController.jsx";

function App() {
  const { setAllUniverses } = useMythyRootsStore();

  useEffect(() => {
    const getUniverses = async () => {
      const universes = await httpService.get(DB_UNIVERSES);
      setAllUniverses(universes);
    };
    getUniverses();
  }, [setAllUniverses]);

  return (
    <div className="main-layout">
      <NavBar />
      <FamilyChart />
      <AppFooter />
      <ModalController />
    </div>
  );
}

export default App;
