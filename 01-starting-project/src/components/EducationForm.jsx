export default function EducationForm({
  educationForms,
  onInputChange,
  onAddForm,
  onAddEntry,
}) {
  return (
    <>
      {educationForms.map((form, index) => (
        // <div className="form-container" key={index}>
        //   <label>School Name</label>
        //   <input
        //     type="text"
        //     name="school"
        //     value={form.school}
        //     onChange={(e) => onInputChange(index, e)}
        //   />

        //   <label>Year Attended</label>
        //   <input
        //     type="text"
        //     name="year"
        //     value={form.year}
        //     onChange={(e) => onInputChange(index, e)}
        //   />
        //   <label>Course</label>
        //   <input
        //     type="text"
        //     name="course"
        //     value={form.course}
        //     onChange={(e) => onInputChange(index, e)}
        //   />

        //   <button onClick={() => onAddEntry(index)}>Save</button>
        //   <button onClick={onAddForm}>Add School</button>
        // </div>

        <div className="form-container2" key={index}>
          <h3>Education Information</h3>
          <div>
            <div className="form-group">
              <label>School Name:</label>
              <input
                type="text"
                name="school"
                value={form.school}
                onChange={(e) => onInputChange(index, e)}
              />
            </div>
            <div className="form-group">
              <label>Year Attended:</label>
              <input
                type="text"
                name="year"
                value={form.year}
                onChange={(e) => onInputChange(index, e)}
              />
            </div>
            <div className="form-group">
              <label>Course</label>
              <input
                type="text"
                name="course"
                s
                value={form.course}
                onChange={(e) => onInputChange(index, e)}
              />
            </div>
            <div className="form-buttons">
              <button className="btn-save" onClick={() => onAddEntry(index)}>
                Save
              </button>
              <button className="btn-add" onClick={onAddForm}>
                Add School
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
