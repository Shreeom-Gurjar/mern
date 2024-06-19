import React from "react";

const App = () => {
  const product = [
    { title: "moblie", name: "iphone", price: 100000 },
    { title: "laptop", name: "Hp", price: 50000 },
    { title: "cycle", name: "ranger", price: 100 },
  ];

  return (
    <div>
      {product.map((data) => (
        <div
          key={Math.random()}
          style={{
            backgroundColor: "gray",
            textAlign: "center",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h1>{data.title}</h1>
          <h2>{data.name}</h2>
          <h3>{data.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
