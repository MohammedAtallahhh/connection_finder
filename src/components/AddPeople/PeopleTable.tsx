import React, { FC } from "react";

import { IPerson } from "../../types";

interface IPeopleTable {
  people: IPerson[];
}

const PeopleTable: FC<IPeopleTable> = ({ people }) => {
  return (
    <div>
      {people.map((person) => (
        <h2>{person.name}</h2>
      ))}
    </div>
  );
};

export default PeopleTable;
