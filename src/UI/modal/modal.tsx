import type { FC, ReactNode } from "react";
import "./modal.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?:string
};

const Modal: FC<ModalProps> = ({ isOpen, onClose, children ,className}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-wrapper">
      <div className="modal-bg" onClick={onClose}></div>
      <div className={`modal-content ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;