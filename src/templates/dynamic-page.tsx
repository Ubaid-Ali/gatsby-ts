import React from "react";
import Layout from "../components/Layout";

export default ({ pageContext }) => {
  return (
    <div>
      <Layout>
        <div> This is a dynamic page. </div>
        <p>Name from gatsby-node.js : {pageContext.name} </p>
        <div> dynamic page created at build time. </div>
      </Layout>
    </div>
  );
};
