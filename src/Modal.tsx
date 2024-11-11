import { X } from "lucide-react";
import React from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "./types";

export const Modal: React.FC<ModalProps> = ({
  text,
  isOpen,
  onClose,
  textColor = "#fff",
  backgroundColor = "#157846",
  iconColor = "#000",
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex justify-center items-center w-full h-full bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col p-16 rounded-lg"
        style={{ backgroundColor, color: textColor }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-4 top-4 cursor-pointer border-none bg-transparent
            text-[clamp(1.6rem,2vw,2rem)] hover:opacity-70 transition-opacity"
          onClick={onClose}
          aria-label="Close modal"
          style={{ color: iconColor }}
        >
          <X />
        </button>
        <h2 className="font-light text-[clamp(2rem,2.5vw,2.5rem)]">
          {text}
        </h2>
      </div>
    </div>,
    document.body
  );
};