import React from "react";
import { RelationForm } from "../shared";

const ConnectionFinder = () => {
  return (
    <section className="connection-finder">
      <div className="container">
        <h2>Find How people are connected</h2>

        <RelationForm title="Find connection" onSubmit={() => {}} />

        <div className="result"></div>
      </div>
    </section>
  );
};

export default ConnectionFinder;
