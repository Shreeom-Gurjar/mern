import React from "react"
const Person = ({name,email,age}) =>{
    const person = {
        name: "superman",
        email: "superman@gmail.com",
        age: 200,
    };
    return(
        <div style={{
            textAlign: "center",
            width: "80%",
            margion: "auto",
            border: "1px solid yellow",
            padding: "10px",
            marginBottom: "10px",
        }}>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{age}</h3>
        </div>
    );
};
export default Person;