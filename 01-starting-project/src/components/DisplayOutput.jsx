export default function DisplayOutput({ input }) {
  return (
    <>
      <div className="header">
        <h1>
          {input.firstName} {input.lastName}
        </h1>
        <p>
          Phone: {input.phoneNumber} | Email: {input.email}
        </p>
      </div>
    </>
  );
}
