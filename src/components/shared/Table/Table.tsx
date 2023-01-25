import React, { FC } from "react";

import "./Table.css";

interface ITable {
  data: Object[];
}

const Table: FC<ITable> = ({ data }) => {
  return (
    <div className="table">
      {/* Header */}
      <div className="table-header">
        {/* Filling table header with object keys */}
        {Object.keys(data[0]).map((key) => (
          <div key={key} className="header__item">
            <span>{key}</span>
          </div>
        ))}
        <div className="header__item">
          <span>Action</span>
        </div>
      </div>

      {/* Content  */}
      <div className="table-content">
        {data.map((row) => (
          <div className="table-row">
            {Object.values(row).map((value) => (
              <div className="table-data">{value}</div>
            ))}
            <button className="table-data delete">delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
