import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./primaryAction.scss";

type Props = {
  to?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

const PrimaryAction = ({ to, onClick, children, className = "" }: Props) => {
  if (to) {
    return (
      <Link to={to} className={`primary-link G-center ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`primary-btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryAction;
