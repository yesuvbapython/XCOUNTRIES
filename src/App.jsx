import React, { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://xcountries-backend.labs.crio.do/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        console.log(data);
      });
  }, []);
 const countriesStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  padding: "20px"
};
  return (
    <div style={countriesStyle}>
  
      {countries.map((country) => (
        <div key={country.abbr} >
          <img src={country.flag} alt={`${country.name} flag`} width="50" />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  )
}