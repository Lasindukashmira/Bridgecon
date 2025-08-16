import React from "react";
import { Link } from "react-router-dom";

function ResponsiveNav() {
  return (
    <div
      className="ResponsiveNav"
      style={{ clipPath: "circle(5.3% at 89% 11%)" }}
    >
      <div className="nalinkcontainer">
        <p className="rlink">
          {" "}
          <Link className="rlinks" to="/">
            Home
          </Link>{" "}
        </p>
        <p className="rlink">
          <Link className="rlinks" to="/service">
            Services
          </Link>{" "}
        </p>
        <p className="rlink">
          <Link className="rlinks" to="/">
            About us
          </Link>{" "}
        </p>
        <p className="rlink">
          <Link className="rlinks" to="/contact">
            Contact us
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default ResponsiveNav;
