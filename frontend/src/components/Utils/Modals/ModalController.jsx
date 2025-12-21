import { Modal, Box } from "@mui/material";
import { useModalStore } from "../../../store/store";

export default function ModalController() {
  const open = useModalStore((s) => s.universeModalOpen);
  const closeModal = useModalStore((s) => s.closeUniverseModal);
  const content = useModalStore((s) => s.content);

  return (
    <Modal open={open} onClose={closeModal}>
      <Box className="modal-unvierse-container">
        {content}
      </Box>
    </Modal>
  );
}
