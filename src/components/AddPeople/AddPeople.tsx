import React from "react";
import { Button, FormGroup } from "../shared";

// Styles
import "./AddPeople.css";

const AddPeople = () => {
  return (
    <section className="add-people">
      <div className="container">
        {/* Content */}
        <div className="add-people__content">
          <h2>
            Add People and relationships between them and find how they are
            connected.
          </h2>
        </div>

        {/* Add people form */}
        <form className="add-people__form">
          <h3 className="form__title">Add People</h3>

          <FormGroup label="name" placeHolder="John Doe" />

          <Button className="form__submit">Add</Button>
        </form>
      </div>
    </section>
  );
};

export default AddPeople;
