import React, { useEffect, useRef, useState } from "react";
import styles from "./TVSegment.module.css";

const TVBox = () => {
  return <div className={styles.tvBox}><div className={styles.tvContent}></div></div>;
}

const DownArrow = () => {
  return <div className={styles.downArrow}></div>;
}

const TVSegment = () => {
  return (
    <div className={styles.page}>
      <TVBox/>
      <div >
        <DownArrow/>
      </div>
    </div>
  );
}


export default TVSegment;