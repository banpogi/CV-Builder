export default function PersonalInfo({ userInput, onChange }) {
  return (
    <div className="info-container">
      <div className="info-form">
        <label>First Name</label>
        <input
          type="text"
          value={userInput.firstName}
          required
          onChange={(event) => onChange("firstName", event.target.value)}
        />

        <label>Last Name</label>
        <input
          type="text"
          value={userInput.lastName}
          required
          onChange={(event) => onChange("lastName", event.target.value)}
        />

        <label>Phone</label>
        <input
          type="text"
          value={userInput.phoneNumber}
          required
          onChange={(event) => onChange("phoneNumber", event.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={userInput.email}
          required
          onChange={(event) => onChange("email", event.target.value)}
        />
      </div>
    </div>
  );
}
