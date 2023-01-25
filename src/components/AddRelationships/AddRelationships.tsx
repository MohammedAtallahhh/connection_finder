import React, { FormEvent } from "react";

// Styles
import "./AddRelationships.css";
import toast from "react-hot-toast";
import {
  addRelationship,
  isPersonExist,
  isRelationshipExist,
} from "../../firebase/db";

import { RelationForm } from "../shared";

interface IFormData {
  firstPerson: string;
  secondPerson: string;
  relationship: string;
}

const AddRelationships = () => {
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    formData: IFormData
  ) => {
    e.preventDefault();

    const { firstPerson, secondPerson, relationship } = formData;

    const data = {
      first: firstPerson.toLowerCase(),
      second: secondPerson.toLowerCase(),
      type: relationship,
    };

    if (!firstPerson || !secondPerson) {
      return toast.error("Names must be provided.");
    }

    if (firstPerson.toLowerCase() === secondPerson.toLowerCase()) {
      return toast.error("Names must be different.");
    }

    if (
      !(await isPersonExist(firstPerson)) ||
      !(await isPersonExist(secondPerson))
    ) {
      return toast.error("Names not exist.");
    }

    if (await isRelationshipExist(data)) {
      return toast.error("Relationship aleardy exist.");
    }
    addRelationship(data);
  };

  return (
    <section className="add-relationships">
      <div className="container">
        <h2 className="add-relationships__title">Add Relationships</h2>
        <RelationForm title="Add Relationship" onSubmit={handleSubmit} />
      </div>
    </section>
  );
};

export default AddRelationships;
