import React, { FC } from "react";

import { IRelationship } from "../../types";

interface IRelationshipsTable {
  relationships: IRelationship[];
}

const RelationshipsTable: FC<IRelationshipsTable> = ({ relationships }) => {
  return (
    <div>
      {/* {relationships.map((r) => (
        
      ))} */}
    </div>
  );
};

export default RelationshipsTable;
