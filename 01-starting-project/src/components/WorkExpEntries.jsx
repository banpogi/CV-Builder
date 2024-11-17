export default function WorkExpEntries({ entries }) {
  return (
    <div className="section">
      <h2>Work Experience</h2>

      {entries.map((entry, index) => (
        <div className="info-item" key={index}>
          <h3>{entry.company}</h3>
          <p>
            {entry.role} - {entry.year}
          </p>
          <p>{entry.description}</p>
        </div>
      ))}
    </div>
  );
}
