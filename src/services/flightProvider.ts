export function provideFlights() {
  return fetch("flights.json")
    .then((response) => {
      if (response.status !== 200) {
        console.log("Could not fetch flights. Status Code: " + response.status);
        return;
      }

      return response.json();
    })
    .catch((err) => console.log("Fetch Error :-S", err));
}
