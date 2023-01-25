import React, { ChangeEvent, FC, FormEvent } from "react";

// Components
import { Button, FormGroup } from "../";

// Styles
import "./RelationForm.css";
import { useState } from "react";

interface IFormData {
  firstPerson: string;
  secondPerson: string;
  relationship: string;
}

interface IRelationForm {
  title: string;
  onSubmit: (e: FormEvent<HTMLFormElement>, formData: IFormData) => void;
}

const RelationForm: FC<IRelationForm> = ({ title, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstPerson: "",
    secondPerson: "",
    relationship: "friend",
  });

  return (
    <form className="relation__form" onSubmit={(e) => onSubmit(e, formData)}>
      <FormGroup
        label="first person"
        placeHolder="John Doe"
        value={formData.firstPerson}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFormData((data) => ({ ...data, firstPerson: e.target.value }))
        }
      />
      <FormGroup
        label="second person"
        placeHolder="Jane Doe"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFormData((data) => ({ ...data, secondPerson: e.target.value }))
        }
      />

      <div className="relation__form--relationship">
        <label htmlFor="relationship">Relationship</label>
        <select
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setFormData((data) => ({ ...data, relationship: e.target.value }))
          }
        >
          <option value="friend" defaultValue="friend">
            Friend
          </option>
        </select>
      </div>

      <Button className="relation__form--submit">{title}</Button>
    </form>
  );
};

export default RelationForm;
