import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./AddPeople.css";

const AddPeople = () => {
  return (
    <section className="add-people">
      <div className="container">
        <div className="add-people__content">
          <h2>
            Add People and relationships between them and find how they are
            connected.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AddPeople;
