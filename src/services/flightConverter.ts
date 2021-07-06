import {
  FlightsDTO,
  ItineraryDTO,
  Leg,
  LegDTO,
} from "../../types/declarations";

export const parseFlight = (itineraryDTO: ItineraryDTO, legs: Leg[]) => ({
  id: itineraryDTO.id,
  legs,
  price: itineraryDTO.price,
  agent: itineraryDTO.agent,
  agentRating: itineraryDTO.agent_rating,
});

export const parseLeg = (legDTO: LegDTO): Leg => ({
  id: legDTO.id,
  departureAirport: legDTO.departure_airport,
  arrivalAirport: legDTO.arrival_airport,
  departureTime: new Date(legDTO.departure_time),
  arrivalTime: new Date(legDTO.arrival_time),
  stops: legDTO.stops,
  airlineName: legDTO.airline_name,
  airlineID: legDTO.airline_id,
  durationMins: legDTO.duration_mins,
});

type LegDict = { [key: string]: LegDTO };

export const parseFlights = (flights?: FlightsDTO) => {
  if (!flights?.legs || !flights?.itineraries) return [];

  const legDict: LegDict = flights.legs.reduce(
    (legs, leg) => ({ ...legs, [leg.id]: leg }),
    {}
  );

  return flights.itineraries.map((itinerary: ItineraryDTO) => {
    const flightLegs = itinerary.legs.map((legID) => parseLeg(legDict[legID]));
    return parseFlight(itinerary, flightLegs);
  });
};
