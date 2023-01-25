import { FC } from "react";

// Styles
import "./Button.css";

const Button: FC<React.HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
}) => {
  return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;
