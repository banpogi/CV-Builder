import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import DisplayOutput from "./components/DisplayOutput";
import EducationForm from "./components/EducationForm";
import EducationEntries from "./components/EducationEntries";

function App() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const [educationForms, setEducationForms] = useState([
    { school: "", year: "", course: "" },
  ]);
  const [educationEntries, setEducationEntries] = useState([]);

  function handleChange(inputIdentifier, updatedValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: updatedValue,
      };
    });
  }

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    setEducationForms((prevForms) =>
      prevForms.map((form, i) =>
        i === index ? { ...form, [name]: value } : form
      )
    );
  };

  const handleAddForm = () => {
    setEducationForms((prevForms) => [
      ...prevForms,
      { school: "", year: "", course: "" },
    ]);
  };

  const handleAddEntry = (index) => {
    const form = educationForms[index];
    if (form.school && form.year && form.course) {
      setEducationEntries((prevEntries) => [...prevEntries, form]);
      setEducationForms((prevForms) =>
        prevForms.map((f, i) =>
          i === index ? { school: "", year: "", course: "" } : f
        )
      );
    }
  };

  return (
    <>
      <div className="info-container">
        <PersonalInfo onChange={handleChange} userInput={userInput} />
        <EducationForm
          educationForms={educationForms}
          onInputChange={handleInputChange}
          onAddForm={handleAddForm}
          onAddEntry={handleAddEntry}
        />
      </div>

      <div className="cv-container">
        <div className="resume">
          <DisplayOutput input={userInput} />

          <div className="content">
            <EducationEntries entries={educationEntries} />
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
