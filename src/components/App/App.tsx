import React from "react";
import Header from "../Header";
import FlightCards from "../FlightList/FlightList";

// @ts-ignore
import styles from "./App.styles.css";

const App = () => (
  <div>
    <Header />
    <main className={styles.content}>
      <FlightCards />
    </main>
  </div>
);

export default App;
