import React from "react";
import styles from "./desc.module.css";
import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <div className={styles.myComponent}>
        <h1>How with component styles</h1>
        <p>Desc component</p>
      </div>
    </Layout>
  );
};
