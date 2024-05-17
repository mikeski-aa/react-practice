import React, { useState } from "react";
import "./App.css";

function InputField({typeOfInput, text, changeFunc}) {

  
  return (
    <>
      <label htmlFor="name">{typeOfInput}
      <input type="text" id="name" value={text} onChange={changeFunc}></input>
      </label>
    </>
  )
}


function App() {
  const [person, setPerson] = useState({ name: "John", hobby: "coding", age: 100});
  const [text, setText] = useState("");

  const handleIncreaseAge = () => {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
    
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }



  return (
    <>
      <InputField 
      typeOfInput="Name" 
      text={text}
      changeFunc={handleChange}/>
      <InputField 
      typeOfInput="Surname"
      text={text}
      changeFunc={handleChange}/>
      <h1>{person.name}</h1> 
      <h1>{person.hobby}</h1>
      <h1>{person.age}</h1>
      <button onClick={handleIncreaseAge}>Increase age button</button> 
    </>
  )
}

export default App;
