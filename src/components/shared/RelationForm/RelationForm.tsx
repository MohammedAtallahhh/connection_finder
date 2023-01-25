import React, { ChangeEvent, FC, FormEvent } from "react";

// Components
import { Button, FormGroup } from "../";

// Styles
import "./RelationForm.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { isPersonExist } from "../../../firebase/db";

interface IFormData {
  first: string;
  second: string;
  relationship: string;
}

interface IRelationForm {
  title: string;
  onSubmit: (
    e: FormEvent<HTMLFormElement>,
    formData: IFormData,
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>,
    validate: () => {}
  ) => void;
}

const RelationForm: FC<IRelationForm> = ({ title, onSubmit }) => {
  const [formData, setFormData] = useState<IFormData>({
    first: "",
    second: "",
    relationship: "friend",
  });

  console.log({ formData });

  const validate = async () => {
    if (!formData.first || !formData.second) {
      return toast.error("Names must be provided.");
    }

    if (formData.first === formData.second) {
      return toast.error("Names must be different.");
    }

    if (
      !(await isPersonExist(formData.first)) ||
      !(await isPersonExist(formData.second))
    ) {
      return toast.error("Names not exist.");
    }
  };

  return (
    <form
      className="relation__form"
      onSubmit={(e) => onSubmit(e, formData, setFormData, validate)}
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
