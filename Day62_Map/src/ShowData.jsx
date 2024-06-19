import React from "react";

const App = () => {
  const movies = [
    {
      id: 1,
      movieName: "Ra.One",
      release: 2012,
      actor: "SRK",
    },
    {
      id: 2,
      movieName: "Infinity",
      release: 2000,
      actor: "salman",
    },
    {
      id: 3,
      movieName: "Badshah",
      release: 2001,
      actor: "Govinda",
    },
    {
      id: 4,
      movieName: "Surywansham",
      release: 2010,
      actor: "Amitab",
    },
  ];
  return (
    <div>
      {movies.map((data) => (
        <div
          key={Math.random()}
          style={{
            backgroundColor: "gray",
            textAlign: "center",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h1>{data.movieName}</h1>
          <h2>{data.actor}</h2>
          <h3>{data.release}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
