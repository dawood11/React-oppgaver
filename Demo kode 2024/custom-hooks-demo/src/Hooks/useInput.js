import { useState } from 'react';

const useInput = (initialState) => {
    const [value, setValue] = useState(initialState);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const reset = () => {
        setValue("");
    };

    return {
        value,
        reset,
        onChange: handleChange,
    };
}

export default useInput;