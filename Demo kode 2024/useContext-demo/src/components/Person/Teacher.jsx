import { ModeContext } from "../../contexts/ModeContext";
import { useContext } from "react";

const Teacher = (props) => {
    const {name, age} = props;
    const modeContext = useContext(ModeContext);

    return (
        <>
            <h1>Teacher name: {name}</h1>
            <p>Age: {age}</p>
            <p><strong>Role: Teacher</strong></p>
            <p>Mode: {modeContext.mode ? "Teacher" : "Student"}</p>
        </>
    );
};

export default Teacher;