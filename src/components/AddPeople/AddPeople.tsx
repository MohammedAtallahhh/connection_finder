import React, { ChangeEvent, FormEvent, useState } from "react";

import { toast } from "react-hot-toast";

import { Button, FormGroup } from "../shared";
import PeopleTable from "./PeopleTable";

import { addPerson, isPersonExist } from "../../firebase/db";
import usePeople from "../../hooks/usePeople";
import { uuidv4 } from "@firebase/util";

// Styles
import "./AddPeople.css";

const AddPeople = () => {
  const [name, setName] = useState("");
  const people = usePeople();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      return toast.error(`Name can't be empty!`);
    }

    if (await isPersonExist(name)) {
      return toast.error("Name already exists! Please choose another one.");
    }

    addPerson({ id: uuidv4(), name });

    setName("");
    toast.success("Name Added successfully!");
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

          <FormGroup
            label="name"
            placeHolder="John Doe"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />

          <Button className="form__submit">Add</Button>
        </form>

        {people.length > 0 && <PeopleTable people={people} />}
      </div>
    </section>
  );
};

export default AddPeople;
