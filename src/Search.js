import React, { useState } from "react";

export default function Search() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently 72˚F in ${city}`);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="type a city" onChange={updateCity} />
        <input type="submit" value="search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
