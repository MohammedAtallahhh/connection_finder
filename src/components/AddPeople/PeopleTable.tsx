import React, { FC } from "react";

import { IPerson } from "../../types";

interface IPeopleTable {
  people: IPerson[];
}

const PeopleTable: FC<IPeopleTable> = ({ people }) => {
  return (
    <div className="table-container">
      <h2>People:</h2>

      <ul className="table">
        {/* Header */}
        <li className="table-header">
          <div className="col col1">Id</div>
          <div className="col col3">Name</div>
        </li>

        {/* Body */}
        {people.map(({ id, name }, i) => (
          <li key={id} className="table-row">
            <div className="col col1">{i + 1}</div>
            <div className="col col3">{name.toUpperCase()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleTable;
