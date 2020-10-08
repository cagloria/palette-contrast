import React, { useState } from "react";
import styled from "styled-components";

const Panel = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 8px;
    background-color: ${(props) => props.color};
`;

function ColorInput({ color, fieldID, fieldLabel, onColorChange }) {
    const [value, setValue] = useState(color);

    function handleColorChange(event) {
        setValue(event.target.value);
        onColorChange(event.target.value);
    }

    return (
        <>
            <Panel color={color} />
            <label htmlFor={fieldID}>{fieldLabel}</label>
            <input
                className="color-select__input"
                type="text"
                name="color-input"
                id={fieldID}
                value={value}
                onChange={handleColorChange}
            />
        </>
    );
}

export default ColorInput;
