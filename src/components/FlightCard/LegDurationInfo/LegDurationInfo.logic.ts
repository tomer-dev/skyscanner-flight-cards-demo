export function formatDuration(durationMins: number) {
  return `${Math.floor(durationMins / 60)}h ${durationMins % 60}`;
}

export function pluralize(noun: string, count: number) {
  return `${count} ${noun}${count !== 1 ? "s" : ""}`;
}
