export interface ModalProps {
  /** The text content to display in the modal */
  text: string;
  /** Controls whether the modal is visible */
  isOpen: boolean;
  /** Function to call when the modal should close */
  onClose: () => void;
  /** Class name for custom styling */
  className?: string;
}