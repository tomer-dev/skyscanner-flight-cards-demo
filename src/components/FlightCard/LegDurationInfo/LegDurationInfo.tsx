import React from "react";
import { Leg } from "../../../../types/declarations";
import { formatDuration, pluralize } from "./LegDurationInfo.logic";

// @ts-ignore
import styles from "./LegDurationInfo.styles.css";

type LegDurationInfoInterface = Pick<Leg, "durationMins" | "stops">;

export default function LegDurationInfo({
  durationMins,
  stops,
}: LegDurationInfoInterface) {
  const stopLabel = stops ? (
    <span className={styles.indirectLabel}>{pluralize("Stop", stops)}</span>
  ) : (
    <span className={styles.directLabel}>Direct</span>
  );

  return (
    <div className={styles.legDurationInfo}>
      <div className={styles.durationLabel}>{formatDuration(durationMins)}</div>
      <div className={styles.stopsLabel}>{stopLabel}</div>
    </div>
  );
}
