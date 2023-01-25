import React, { FormEvent } from "react";
import { Button, FormGroup, Table } from "../shared";

// Styles
import "./AddPeople.css";
import { usePeople } from "../../hooks";

const AddPeople = () => {
  const people = usePeople();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
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
        <form className="add-people__form" onSubmit={handleSubmit}>
          <h3 className="form__title">Add People</h3>

          <FormGroup label="name" placeHolder="John Doe" />

          <Button className="form__submit">Add</Button>
        </form>

        {people.length > 0 && <Table data={[{ id: 1, name: "Mohammed" }]} />}
      </div>
    </section>
  );
};

export default AddPeople;
