// Styles
import "./AddRelationships.css";
import toast from "react-hot-toast";
import {
  addRelationship,
  isPersonExist,
  isRelationshipExist,
} from "../../firebase/db";

import { RelationForm } from "../shared";
import useRelationships from "../../hooks/useRelationships";
import RelationshipsTable from "./RelationshipsTable";

interface IFormData {
  first: string;
  second: string;
  relationship: string;
}

const AddRelationships = () => {
  const relationships = useRelationships();

  const handleSubmit = async (
    formData: IFormData,
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>
  ) => {
    // Validate form fields
    const { first, second, relationship } = formData;

    if (!first || !second) {
      return toast.error("Names must be provided.");
    }

    if (first === second) {
      return toast.error("Names must be different.");
    }

    if (!(await isPersonExist(first)) || !(await isPersonExist(second))) {
      return toast.error("Names not exist.");
    }

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

        {relationships.length > 0 && (
          <RelationshipsTable relationships={relationships} />
        )}
      </div>
    </section>
  );
};

export default AddRelationships;
