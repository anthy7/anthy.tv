import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          anthy.tv
        </Link>
        <div className={styles.navLinks}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${location.pathname === "/" ? styles.active : ""}`}
          >
            Home
          </Link>
          <Link 
            to="/blog" 
            className={`${styles.navLink} ${location.pathname === "/blog" ? styles.active : ""}`}
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
