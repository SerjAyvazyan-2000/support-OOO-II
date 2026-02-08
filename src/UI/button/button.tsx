import type { FC, ButtonHTMLAttributes } from "react";
import "./button.scss";

type ButtonVariant = "black" | "gray";

type ButtonProps = {
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  variant = "black",
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;