import { useState } from "react";
import MythyRootsLogo from "../utils/MythyRootsLogo";
import UniverseButton from "./Utils/UniverseButton";
import ModalController from "./Utils/Modals/ModalController";

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-container">
      <MythyRootsLogo />
      <UniverseButton handleOpen={() => setOpen(true)} />
      <ModalController onClose={() => setOpen(false)} />
    </div>
  );
}