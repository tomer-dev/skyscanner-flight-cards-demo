import React from "react";

import { Leg } from "../../../../types/declarations";
import { getAgentLogo } from "../../../utils";

import LegDestinationInfo from "../LegDestinationInfo/LegDestinationInfo";
import LegDurationInfo from "../LegDurationInfo/LegDurationInfo";

// @ts-ignore
import styles from "./LegInfo.styles.css";

export default function LegInfo({
  leg: {
    departureAirport,
    arrivalAirport,
    departureTime,
    arrivalTime,
    stops,
    airlineName,
    airlineID,
    durationMins,
  },
}: {
  leg: Leg;
}) {
  return (
    <div className={styles.leg}>
      <img
        src={getAgentLogo(airlineID)}
        className={styles.airlineLogo}
        alt={`Airline logo - ${airlineName}`}
      />
      <LegDestinationInfo
        departureTime={departureTime}
        departureAirport={departureAirport}
        arrivalTime={arrivalTime}
        arrivalAirport={arrivalAirport}
      />
      <LegDurationInfo durationMins={durationMins} stops={stops} />
    </div>
  );
}
