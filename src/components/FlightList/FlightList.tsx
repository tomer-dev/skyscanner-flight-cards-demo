import React, { useEffect, useState } from "react";

import { fetchFlights } from "../../services/flightService";

import { Flight } from "../../../types/declarations";

import FlightCard from "../FlightCard/FlightCard";

export default function FlightList() {
  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    fetchFlights().then((flights) => setFlights(flights));
  }, []);

  return (
    <div>
      {!flights && <span>Loading...</span>}

      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
}
