import React from "react";
// @ts-ignore
import styles from "./LegDestinationInfo.styles.css";

const formatTime = (date: Date) => date.toISOString().substr(11, 5);

export default function TimePlaceLabels({
  date,
  place,
}: {
  date: Date;
  place: string;
}) {
  return (
    <div className={styles.labels}>
      <div className={styles.time}>{formatTime(date)}</div>
      <div className={styles.place}>{place}</div>
    </div>
  );
}
