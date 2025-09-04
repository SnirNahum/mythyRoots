import { Modal, Box } from "@mui/material";
import CardsPage from "./CardsPage";

export default function UniverseModal({ onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal-unvierse-container">
        <CardsPage onClose={onClose} />
      </Box>
    </Modal>
  );
}
