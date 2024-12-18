export default function WorkExpForm({
  workForms,
  onInputChange,
  onAddForm,
  onAddEntry,
}) {
  return (
    <>
      {/* {workForms.map((form, index) => (
        <div className="form-container" key={index}>
          <label>Company Name</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={(e) => onInputChange(index, e)}
          />

          <label>Year Started</label>
          <input
            type="text"
            name="year"
            value={form.year}
            onChange={(e) => onInputChange(index, e)}
          />
          <label>Job Role</label>
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={(e) => onInputChange(index, e)}
          />

          <label>Job Description</label>
          <textarea
            type="text"
            name="description"
            value={form.description}
            rows="4"
            cols="50"
            onChange={(e) => onInputChange(index, e)}
          ></textarea>

          <button onClick={() => onAddEntry(index)}>Save</button>
          <button onClick={onAddForm}>Add Work Experience</button>
        </div>
      ))} */}

      {workForms.map((form, index) => (
        <div className="form-container2" key={index}>
          <h3>Work Experience</h3>
          <div>
            <div className="form-group">
              <label>Company Name:</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={(e) => onInputChange(index, e)}
              />
            </div>
            <div className="form-group">
              <label>Year Started:</label>
              <input
                type="text"
                name="year"
                value={form.year}
                onChange={(e) => onInputChange(index, e)}
              />
            </div>
            <div className="form-group">
              <label>Job Role:</label>
              <input
                type="text"
                name="role"
                value={form.role}
                onChange={(e) => onInputChange(index, e)}
              />
            </div>
            <div className="form-group">
              <label>Job Description</label>
              <input
                type="text"
                name="description"
                value={form.description}
                onChange={(e) => onInputChange(index, e)}
              />
            </div>
            <div className="form-buttons">
              <button className="btn-save" onClick={() => onAddEntry(index)}>
                Save
              </button>
              <button className="btn-add" onClick={onAddForm}>
                Add Work Experience
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
