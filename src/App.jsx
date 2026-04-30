import React, { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false); // ✅ added

  useEffect(() => {
    fetch("https://xcountries-backend.labs.crio.do/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API failed"); // ✅ important
        }
        return response.json();
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); 
        setError(true); // ✅ update state
      });
  }, []);

  const countriesStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    padding: "20px"
  };

  // ✅ show error UI
  if (error) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div style={countriesStyle}>
      {countries.map((country) => (
        <div key={country.abbr}>
          <img src={country.flag} alt={`${country.name} flag`} width="50" />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
}
