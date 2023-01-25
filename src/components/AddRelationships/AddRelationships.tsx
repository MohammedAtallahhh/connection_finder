import React, { FormEvent } from "react";

// Styles
import "./AddRelationships.css";
import toast from "react-hot-toast";
import { addRelationship, isRelationshipExist } from "../../firebase/db";

import { RelationForm } from "../shared";

interface IFormData {
  first: string;
  second: string;
  relationship: string;
}

const AddRelationships = () => {
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    formData: IFormData,
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>,
    validate: () => {}
  ) => {
    e.preventDefault();
    // Validate form fields
    validate();

    const { first, second, relationship } = formData;

    if (await isRelationshipExist({ first, second, type: relationship })) {
      return toast.error("Relationship aleardy exist.");
    }

    // Add data to the database
    addRelationship({ first, second, type: relationship });

    toast.success("Relationship added successfully!");

    // Reset form
    setFormData({
      first: "",
      second: "",
      relationship: "friend",
    });
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
