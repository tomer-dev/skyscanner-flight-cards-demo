import React from "react";
// @ts-ignore
import LongArrowRightIcon from "bpk-component-icon/lg/long-arrow-right";

import { Leg } from "../../../../types/declarations";
import TimePlaceLabels from "./TimePlaceLabels";

// @ts-ignore
import styles from "./LegDestinationInfo.styles.css";

type LegDestinationInfoInterface = Pick<
  Leg,
  "departureAirport" | "departureTime" | "arrivalAirport" | "arrivalTime"
>;

export default function LegDestinationInfo({
  departureTime,
  departureAirport,
  arrivalAirport,
  arrivalTime,
}: LegDestinationInfoInterface) {
  return (
    <div className={styles.timePlaceInfo}>
      <TimePlaceLabels date={departureTime} place={departureAirport} />
      <LongArrowRightIcon className={styles.arrow} />
      <TimePlaceLabels date={arrivalTime} place={arrivalAirport} />
    </div>
  );
}
