import React from "react";
import TVSegment from "../TVSegment/TVSegment";
import styles from "../App.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      <TVSegment />
    </div>
  );
};

export default Home;
