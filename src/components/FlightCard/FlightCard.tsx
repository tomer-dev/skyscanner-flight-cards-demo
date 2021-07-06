import React from "react";
// @ts-ignore
import BpkCard from "bpk-component-card";

import { Flight } from "../../../types/declarations";

import LegInfo from "./LegInfo/LegInfo";
import FlightCardFooter from "./FlightCardFooter/FlightCardFooter";

// @ts-ignore
import styles from "./FlightCard.styles.css";

export default function FlightCard({
  flight: { legs, price, agent },
}: {
  flight: Flight;
}) {
  return (
    <BpkCard className={styles.card}>
      {legs.map((leg) => (
        <LegInfo key={leg.id} leg={leg} />
      ))}
      <FlightCardFooter price={price} agent={agent} />
    </BpkCard>
  );
}
