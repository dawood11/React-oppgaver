export const Agenda = ({data}) => {
  return (
    <li style={{ border: "2px solid black", margin: "5px" }}>
      <h2>{data.name}</h2>
      <p>
        <strong>Lengde:</strong> {data.length} minutter
      </p>
      <p>
        <strong>Pause:</strong> {data.break} minutter
      </p>
      <p>{data.readMore}</p>
    </li>
  );
};

export default Agenda;
