import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import PersonalInfo from "./components/PersonalInfo";
import DisplayOutput from "./components/DisplayOutput";
import EducationForm from "./components/EducationForm";
import EducationEntries from "./components/EducationEntries";
import WorkExpForm from "./components/WorkExpForm";
import WorkExpEntries from "./components/WorkExpEntries";

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

  const [workForms, setWorkForms] = useState([
    { company: "", year: "", role: "", description: "" },
  ]);
  const [workExpEntries, setWorkExpEntries] = useState([]);

  const printRef = useRef();

  const handleDownloadPDF = () => {
    const element = printRef.current; // Get the container DOM element
    const options = {
      margin: 0,
      filename: "Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "pt", format: [595.28, 841.89], orientation: "portrait" },
    };
    element.style.height = "841.89pt"; // A4 height in points
    element.style.overflow = "hidden"; // Prevent content from spilling outside
    html2pdf().from(element).set(options).save();
  };

  function handleChange(inputIdentifier, updatedValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: updatedValue,
      };
    });
  }

  const handleInputSchoolChange = (index, e) => {
    const { name, value } = e.target;
    setEducationForms((prevForms) =>
      prevForms.map((form, i) =>
        i === index ? { ...form, [name]: value } : form
      )
    );
  };

  const handleAddSchoolForm = () => {
    setEducationForms((prevForms) => [
      ...prevForms,
      { school: "", year: "", course: "" },
    ]);
  };

  const handleAddSchoolEntry = (index) => {
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

  const handleInputWorkChange = (index, e) => {
    const { name, value } = e.target;
    setWorkForms((prevForms) =>
      prevForms.map((form, i) =>
        i === index ? { ...form, [name]: value } : form
      )
    );
  };

  const handleWorkForm = () => {
    setWorkForms((prevForms) => [
      ...prevForms,
      { company: "", year: "", role: "", description: "" },
    ]);
  };

  const handleAddWorkEntry = (index) => {
    const form = workForms[index];
    if (form.company && form.year && form.role && form.description) {
      setWorkExpEntries((prevEntries) => [...prevEntries, form]);
      setWorkForms((prevForms) =>
        prevForms.map((f, i) =>
          i === index ? { company: "", year: "", role: "", description: "" } : f
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
          onInputChange={handleInputSchoolChange}
          onAddForm={handleAddSchoolForm}
          onAddEntry={handleAddSchoolEntry}
        />

        <WorkExpForm
          workForms={workForms}
          onInputChange={handleInputWorkChange}
          onAddForm={handleWorkForm}
          onAddEntry={handleAddWorkEntry}
        />
      </div>

      <div className="cv-container">
        <div ref={printRef} className="resume">
          <DisplayOutput input={userInput} />
          <div className="content">
            <EducationEntries entries={educationEntries} />
            <WorkExpEntries entries={workExpEntries} />
          </div>
          <button onClick={handleDownloadPDF}>Download as PDF</button>
        </div>
      </div>
    </>
  );
}

export default App;
