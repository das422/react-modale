export interface ModalProps {
  /** The text content to display in the modal */
  text: string;
  /** Controls whether the modal is visible */
  isOpen: boolean;
  /** Function to call when the modal should close */
  onClose: () => void;
  /** Color of the text (default: "#fff") */
  textColor?: string;
  /** Background color of the modal (default: "#157846") */
  backgroundColor?: string;
  /** Color of the close icon (default: "#000") */
  iconColor?: string;
}