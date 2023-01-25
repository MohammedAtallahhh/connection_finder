import React, { FC } from "react";

// Styles
import "./FormGroup.css";

interface IFromGroup {
  label: string;
  placeHolder: string;
}
const FormGroup: FC<IFromGroup> = ({ label, placeHolder }) => {
  return (
    <div className="form-group">
      <label htmlFor={label} className="form__label">
        {label}
      </label>
      <input
        id={label}
        type="text"
        className="form__input"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default FormGroup;
