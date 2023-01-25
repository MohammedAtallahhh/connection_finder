import React, { FC } from "react";

interface ITable {
  columns: string[];
  data: Record<string, string>;
}

const Table: FC<ITable> = () => {
  return <div>Table</div>;
};

export default Table;
