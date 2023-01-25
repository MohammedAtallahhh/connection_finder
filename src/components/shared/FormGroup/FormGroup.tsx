import React, { ChangeEvent, FC } from "react";

// Styles
import "./FormGroup.css";

interface IFromGroup {
  label: string;
  placeHolder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const FormGroup: FC<IFromGroup> = ({ label, placeHolder, value, onChange }) => {
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
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormGroup;
