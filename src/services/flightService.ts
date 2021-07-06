import { provideFlights } from "./flightProvider";
import { parseFlights } from "./flightConverter";
import { Flight } from "../../types/declarations";

export function fetchFlights(): Promise<Flight[]> {
  return provideFlights().then(parseFlights);
}
