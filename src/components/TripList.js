import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./TripList.css";

const baseUrl = "http://localhost:3000/trips";

export default function TripList() {
  const [url, setUrl] = useState(baseUrl);
  const { data: trips, isPending, error } = useFetch(url);

  return (
    <div className="trip-list">
      <h1>Trip List</h1>
      {isPending && <div>Loading Trips...</div>}
      {error && <div>{error}</div>}
      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h1>{trip.title}</h1>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=european")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=america")}
        >
          American Trips
        </button>
      </div>
    </div>
  );
}
