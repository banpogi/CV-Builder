export default function EducationEntries({ entries }) {
  return (
    <>
      <div className="section">
        <h2>Education</h2>

        {entries.map((entry, index) => (
          <div className="info-item" key={index}>
            <h3>{entry.school}</h3>
            <p>
              {entry.course}, {entry.year}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
