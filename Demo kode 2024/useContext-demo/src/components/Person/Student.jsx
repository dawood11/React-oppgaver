import { ModeContext } from "../../contexts/ModeContext";
import { useContext } from "react";

const Student = (props) => {
    const {name, age} = props;
    const modeContext = useContext(ModeContext);

    return (
        <>
            <h1>Student name: {name}</h1>
            <p>Age: {age}</p>
            <p><strong>Role: Student</strong></p>
            <p>Mode: {modeContext.mode ? "Teacher" : "Student"}</p>
        </>
    );
};

export default Student;