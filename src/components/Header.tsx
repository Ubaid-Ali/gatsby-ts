import React from "react";
import { Link } from "gatsby";

export default () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/blog1/">Blog1</Link>
      <Link to="/desc/">Desc</Link>
    </div>
  );
};
