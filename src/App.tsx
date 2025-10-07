import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import RoutesPage from "./pages/Routes";
import styles from "./App.module.css";

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Navigation />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<RoutesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;