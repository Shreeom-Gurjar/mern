import React from "react";

const First = () => {
  return (
    <>
      <div>
        <div
          className="Nav-bar"
          style={{
            backgroundColor: "blue",
            color: "white",
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
            padding:"10px",
            alignItems:"center",
            border:"2px solid yellow",
            borderRadius:"10px",
            margin:"20px"
          }}
        >
          <div className="Nav1"><b>built in</b></div>
          <div className="Nav1">
            <button style={{width:"200px",borderRadius:"10px",}}>Search</button>
          </div>
          <div className="Nav1"><b>JOIN</b></div>
          <div className="Nav1"><b>LOG IN</b></div>
        </div>
      </div>
      
    </>
  );
};

export default First;
