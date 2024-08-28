import Agenda from "./Agenda";

const AgendaList = () => {
  const agendaList = [
    {
      name: "Intro",
      length: 25,
      break: 5,
      readMore:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis",
    },
    {
      name: "Agenda",
      length: 25,
      break: 5,
      readMore:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis",
    },
    {
      name: "Components",
      length: 120,
      break: 30,
      readMore:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis",
    },
    {
      name: "Props",
      length: 120,
      break: 5,
      readMore:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis",
    },
  ];

  return (
    <ul>
      {agendaList.map((agenda, index) => (
        <Agenda key={index} data={agenda} />
      ))}
    </ul>
  );
};

export default AgendaList;
