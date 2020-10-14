import React, { useState } from "react";
import styled from "styled-components";

const PreviewBox = styled.div`
    background-color: ${(props) => props.color};
`;

function ColorInput({ color, fieldID, fieldLabel, onColorChange }) {
    const [value, setValue] = useState(color);

    function handleColorChange(event) {
        setValue(event.target.value);
        onColorChange(event.target.value);
    }

    return (
        <div className="color-input">
            <PreviewBox color={color} className="color-input__preview-box" />
            <label htmlFor={fieldID}>{fieldLabel}</label>
            <input
                className="color-select__input"
                type="text"
                id={fieldID}
                value={value}
                onChange={handleColorChange}
            />
        </div>
    );
}

export default ColorInput;
