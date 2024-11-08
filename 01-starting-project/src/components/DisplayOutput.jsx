export default function DisplayOutput({ input }) {
  return (
    <>
      <p>
        Name : {input.firstName} <br />
      </p>

      <p>LastName : {input.lastName}</p>
    </>
  );
}
