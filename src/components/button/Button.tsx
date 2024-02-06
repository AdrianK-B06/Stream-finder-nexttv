import React from "react";
import style from "./button.module.css";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className={style.searchBtn} onClick={onClick}>
      Search!
    </button>
  );
};

export default Button;
