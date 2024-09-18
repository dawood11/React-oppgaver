import { PersonType } from "./Types";

interface PersonPropType {
    nameProp: PersonType;
}

const Person = (props: PersonPropType) => {
    const {nameProp} = props;
  return (
    <>
        <h1>Hei {nameProp.name}</h1>
    </>
  )
}

export default Person;