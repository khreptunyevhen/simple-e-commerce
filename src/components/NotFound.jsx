import React from "react";
import { Link } from "react-router-dom";

import "./styles/notFound.scss";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container">
        <h2>
          <span>404</span>
          <span>Page not found</span>
        </h2>
        <p>
          We haven't found this page, there is something wrong with your
          internet connection.
        </p>
        <p className="go-back">
          Go back to
          <Link to={"/home"}>home</Link>
          or
          <Link to={"/shop"}>shop</Link>.
        </p>
      </div>
    </section>
  );
};

export default NotFound;
