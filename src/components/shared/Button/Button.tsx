import { FC } from "react";

// Styles
import "./Button.css";

const Button: FC<React.HTMLProps<HTMLButtonElement>> = ({ children }) => {
  return <button className="btn">{children}</button>;
};

export default Button;
