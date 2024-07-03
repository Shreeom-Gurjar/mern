import React from "react";
import { useParams } from "react-router-dom";
import { arr } from  "../data"
const Product_Detail = () => {
  // console.log(useParams())
  const { id } = useParams();
 
  const filterData = arr.filter((data) => data.id == id);
  console.log("Filter data = ", filterData);
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <img
        src={filterData[0].img}
        alt=""
        style={{
          width: "250px",
          border: "2px solid blue",
          borderRadius: "10px",
        }}
      />
      <h1>{filterData[0].title}</h1>
      <p>{filterData[0].description}</p>
    </div>
  );
};

export default Product_Detail;
