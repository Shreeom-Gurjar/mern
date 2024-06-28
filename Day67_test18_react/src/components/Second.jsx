import React from "react";

const Second = () => {
  return (
    <>
      <div ClassName="parent">
        <div style={{ textAlign: "center" }}>
          <h1>Differnent Ways to Display Images in React.js Apps</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <b>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            nemo officiis quod quam veritatis fugit porro minima omnis, odit
            illo, maiores ab non dignissimos. Minima quasi quos magnam quidem
            exercitationem error eum incidunt aspernatur. Repellendus, corporis!
            Culpa tenetur eos expedita sequi, possimus dolore et perspiciatis
            assumenda perferendis. Unde, tenetur ullam!
          </b>
        </div>
      </div>
      <div style={{padding:"20px"}}>
        <img
          src="https://img.freepik.com/free-photo/authentic-book-club-scene_23-2150104570.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717372800&semt=ais_user"
          height="100px" width="100px" border="2px solid black"
        ></img>
      </div>
    </>
  );
};

export default Second;
