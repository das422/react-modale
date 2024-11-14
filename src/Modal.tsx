import { X } from "lucide-react";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "./types";

export const Modal: React.FC<ModalProps> = ({
  text,
  isOpen,
  onClose,
  className = "",
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className={`relative bg-white p-8 rounded-lg shadow-lg ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        <p className="text-2xl font-medium pr-8">{text}</p>
      </div>
    </div>,
    document.body
  );
};