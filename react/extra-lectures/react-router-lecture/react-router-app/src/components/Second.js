import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Second = (props) => {
  return (
    <React.Fragment>
      {/* <!-- Jumbotron --> */}

      <div className="jumbotron">
        <h1 className="display-4">Second Page</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classNamees for typography and spacing to space
          content out within the larger container.
        </p>
        <p className="lead">
          <a
            className="btn btn-primary btn-lg"
            href="./second.html"
            role="button"
          >
            Learn more
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Second;
