import React from "react";
import { Link } from 'gatsby';

interface HeaderProps {
  text: string;
  subtext?: string;
}

export default () => {
  return (
    <div className="header">
      <Link to="/" >Home</Link>
      <Link to="/blog1/" >Blog1</Link>
    </div>
  );
};
