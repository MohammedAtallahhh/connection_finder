import React, { useState } from "react";
import { toast } from "react-hot-toast";

import { isPersonExist } from "../../firebase/db";
import { useRelationships } from "../../hooks";
import Graph from "../../utils/graph";

import { RelationForm } from "../shared";

import "./ConnectionFinder.css";

interface IFormData {
  first: string;
  second: string;
  relationship: string;
}

const ConnectionFinder = () => {
  const [result, setResult] = useState<string[] | null>(null);

  const relationships = useRelationships();
  const graph = new Graph();

  const handleSubmit = async (
    formData: IFormData,
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>
  ) => {
    // Validate form fields
    const { first, second } = formData;

    if (!first || !second) {
      return toast.error("Names must be provided.");
    }

    if (first === second) {
      return toast.error("Names must be different.");
    }

    if (!(await isPersonExist(first)) || !(await isPersonExist(second))) {
      return toast.error("Names not exist.");
    }

    relationships.forEach((relationship) =>
      graph.addEdge(relationship.first.trim(), relationship.second.trim())
    );

    const res: string[] | undefined = graph.bidirectionalSearch(first, second);

    setResult(res ?? []);

    // Reset form
    setFormData({
      first: "",
      second: "",
      relationship: "friend",
    });
  };

  return (
    <section className="connection-finder">
      <div className="container">
        <h2>Find How people are connected</h2>

        <RelationForm title="Find connection" onSubmit={handleSubmit} />

        {result && result.length >= 2 ? (
          <div className="result">
            {result.map((item, i) => (
              <div className="name" key={item}>
                <span>{item}</span>
                {i < result.length - 1 && <span>&gt;</span>}
              </div>
            ))}
          </div>
        ) : result && result.length < 2 ? (
          <div className="result">
            <h4>No connection.</h4>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ConnectionFinder;
