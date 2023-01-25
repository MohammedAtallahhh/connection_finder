import React from "react";
import { RelationForm } from "../shared";

// Styles
import "./AddRelationships.css";

const AddRelationships = () => {
  return (
    <section className="add-relationships">
      <div className="container">
        <h2 className="add-relationships__title">Add Relationships</h2>
        <RelationForm title="Add Relationship" onSubmit={() => {}} />
      </div>
    </section>
  );
};

export default AddRelationships;
