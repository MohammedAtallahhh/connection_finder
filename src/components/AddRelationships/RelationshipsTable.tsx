import React, { FC } from "react";
import { deleteById } from "../../firebase/db";

import { IRelationship } from "../../types";

interface IRelationshipsTable {
  relationships: IRelationship[];
}

const RelationshipsTable: FC<IRelationshipsTable> = ({ relationships }) => {
  return (
    <div>
      <div className="table-container">
        <h2>Relationships:</h2>

        <ul className="table">
          {/* Header */}
          <li className="table-header">
            <div className="col col-1">Id</div>
            <div className="col col-2">First</div>
            <div className="col col-3">Second</div>
            <div className="col col-3">Type</div>
            <div className="col col-3">Action</div>
          </li>

          {/* Body */}
          {relationships.map(({ id, first, second, type }, i) => (
            <li key={id} className="table-row">
              <div className="col col-1">{i + 1}</div>
              <div className="col col-2">{first.toUpperCase()}</div>
              <div className="col col-2">{second.toUpperCase()}</div>
              <div className="col col-2">{type.toUpperCase()}</div>
              <div className="col col-3">
                <button
                  className="delete"
                  onClick={() => deleteById(id, "relationships")}
                >
                  delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RelationshipsTable;
