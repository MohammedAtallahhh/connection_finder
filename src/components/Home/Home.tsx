import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <h2>
          Add People and relationships between them and find how they are
          connected.
        </h2>

        <Link to="/add-people">Start by adding people</Link>
      </div>
    </section>
  );
};

export default Home;
