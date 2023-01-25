import React, { ChangeEvent, FC, useState } from "react";

// Components
import { Button, FormGroup } from "../";

// Styles
import "./RelationForm.css";
interface IFormData {
  first: string;
  second: string;
  relationship: string;
}

interface IRelationForm {
  title: string;
  onSubmit: (
    formData: IFormData,
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>
  ) => void;
}

const RelationForm: FC<IRelationForm> = ({ title, onSubmit }) => {
  const [formData, setFormData] = useState<IFormData>({
    first: "",
    second: "",
    relationship: "friend",
  });

  return (
    <form
      className="relation__form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData, setFormData);
      }}
    >
      <FormGroup
        label="first person"
        placeHolder="John Doe"
        value={formData.first}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFormData((data) => ({
            ...data,
            first: e.target.value.toLowerCase(),
          }))
        }
      />
      <FormGroup
        label="second person"
        placeHolder="Jane Doe"
        value={formData.second}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFormData((data) => ({
            ...data,
            second: e.target.value.toLowerCase(),
          }))
        }
      />

      <div className="relation__form--relationship">
        <label htmlFor="relationship">Relationship</label>
        <select
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setFormData((data) => ({ ...data, relationship: e.target.value }))
          }
        >
          <option value="friend">Friend</option>
        </select>
      </div>

      <Button className="relation__form--submit">{title}</Button>
    </form>
  );
};

export default RelationForm;
