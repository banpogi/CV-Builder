export default function PersonalInfo({ userInput, onChange }) {
  return (
    <div className="form-container">
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
      <label>Phone</label>
      <input
        type="text"
        value={userInput.phoneNumber}
        onChange={(event) => onChange("phoneNumber", event.target.value)}
      />

      <label>Email</label>
      <input
        type="email"
        value={userInput.email}
        onChange={(event) => onChange("email", event.target.value)}
      />
    </div>
  );
}
