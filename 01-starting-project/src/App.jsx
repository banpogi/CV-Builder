import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import DisplayOutput from "./components/DisplayOutput";
function App() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
  });

  function handleChange(inputIdentifier, updatedValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: updatedValue,
      };
    });
  }

  console.log("rendering");

  return (
    <>
      <PersonalInfo onChange={handleChange} userInput={userInput} />

      <div className="cv-container">
        <DisplayOutput input={userInput} />
      </div>
    </>
  );
}

export default App;
