export default function PersonalInfo({ userInput, onChange }) {
  return (
    <div className="info-container">
      <div className="info-form">
        <label>First Name</label>
        <input
          type="text"
          value={userInput.firstName}
          onChange={(event) => onChange("firstName", event.target.value)}
        />

        <label>Last Name</label>
        <input
          type="text"
          value={userInput.lastName}
          onChange={(event) => onChange("lastName", event.target.value)}
        />
      </div>
    </div>
  );
}
