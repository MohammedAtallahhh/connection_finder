import React, { FC } from "react";

// Third-Party
import Select from "react-select";

// Components
import { Button, FormGroup } from "../";

// Styles
import "./RelationForm.css";

const options = [{ value: "friend", label: "Friend" }];

interface IRelationForm {
  title: string;
  onSubmit: () => void;
}

const RelationForm: FC<IRelationForm> = ({ title, onSubmit }) => {
  return (
    <form className="relation__form" onSubmit={onSubmit}>
      <FormGroup label="first person" placeHolder="John Doe" />
      <FormGroup label="second person" placeHolder="Jane Doe" />

      <div className="relation__form--relationship">
        <label htmlFor="relationship">Relationship</label>
        <Select options={options} defaultValue={options[0]} id="relationship" />
      </div>

      <Button className="relation__form--submit">{title}</Button>
    </form>
  );
};

export default RelationForm;
