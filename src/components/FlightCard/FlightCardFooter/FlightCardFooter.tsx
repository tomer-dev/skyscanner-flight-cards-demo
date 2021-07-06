import React from "react";
// @ts-ignore
import BpkButton from "bpk-component-button";

import { Flight } from "../../../../types/declarations";

// @ts-ignore
import styles from "./FlightCardFooter.styles.css";

type FlightCardFooterInterface = Pick<Flight, "price" | "agent">;

export default function FlightCardFooter({
  price,
  agent,
}: FlightCardFooterInterface) {
  return (
    <div className={styles.flightCardFooter}>
      <div className={styles.agentDetails}>
        <div className={styles.price}> {price} </div>
        <div className={styles.agent}> {agent} </div>
      </div>
      <BpkButton large className={styles.selectButton}>
        Select
      </BpkButton>
    </div>
  );
}
