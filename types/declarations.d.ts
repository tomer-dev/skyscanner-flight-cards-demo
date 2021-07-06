export interface Flight {
  id: string;
  legs: Leg[];
  price: string;
  agent: string;
  agentRating: number;
}

export interface Leg {
  id: string;
  departureAirport: string;
  arrivalAirport: string;
  departureTime: Date;
  arrivalTime: Date;
  stops: number;
  airlineName: string;
  airlineID: string;
  durationMins: number;
}

export interface LegDTO {
  id: string;
  departure_airport: string;
  arrival_airport: string;
  departure_time: string;
  arrival_time: string;
  stops: number;
  airline_name: string;
  airline_id: string;
  duration_mins: number;
}

export interface ItineraryDTO {
  id: string;
  legs: string[];
  price: string;
  agent: string;
  agent_rating: number;
}

export interface FlightsDTO {
  itineraries?: ItineraryDTO[];
  legs?: LegDTO[];
}
