import { useState } from "react";
import MythyRootsLogo from "../utils/MythyRootsLogo";
import UniverseModal from "./UniverseModal";
import UniverseButton from "./Utils/UniverseButton";

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-container">
      <MythyRootsLogo />
      <UniverseButton handleOpen={() => setOpen(true)} />
      {open && <UniverseModal onClose={() => setOpen(false)} />}
    </div>
  );
}
