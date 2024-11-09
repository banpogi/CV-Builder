import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import DisplayOutput from "./components/DisplayOutput";
function App() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
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
        <div className="resume">
          <DisplayOutput input={userInput} />

          <div className="content">
            <div className="section">
              <h2>Education</h2>
              <div className="info-item">
                <h3>University Name</h3>
                <p>Bachelor's Degree in Subject, Graduation Year</p>
              </div>
              <div className="info-item">
                <h3>High School Name</h3>
                <p>High School Diploma, Graduation Year</p>
              </div>
            </div>

            <div className="section">
              <h2>Work Experience</h2>
              <div className="info-item">
                <h3>Company Name</h3>
                <p>Role - Start Date to End Date</p>
                <p>Brief description of responsibilities and achievements.</p>
              </div>
              <div className="info-item">
                <h3>Company Name</h3>
                <p>Role - Start Date to End Date</p>
                <p>Brief description of responsibilities and achievements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
