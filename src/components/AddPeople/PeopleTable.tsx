import React, { FC } from "react";

import { IPerson } from "../../types";

import { deleteById } from "../../firebase/db";

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
          <div className="col col-1">Id</div>
          <div className="col col-2">Name</div>
          {/* <div className="col col-3">Action</div> */}
        </li>

        {/* Body */}
        {people.map(({ id, name }, i) => (
          <li key={id} className="table-row">
            <div className="col col-1">{i + 1}</div>
            <div className="col col-2">{name.toUpperCase()}</div>
            {/* <div className="col col-3">
              <button
                className="delete"
                onClick={() => deleteById(id, "people")}
              >
                delete
              </button>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleTable;
