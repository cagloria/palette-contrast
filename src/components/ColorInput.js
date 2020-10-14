import React, { useState } from "react";
import styled from "styled-components";

const Panel = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 8px;
    background-color: ${(props) => props.color};
`;

function ColorInput({ color, fieldLabel, onColorChange }) {
    const [value, setValue] = useState(color);

    function handleColorChange(event) {
        setValue(event.target.value);
        onColorChange(event.target.value);
    }

    return (
        <>
            <Panel color={color} />
            <label>
                {fieldLabel}
                <input
                    className="color-select__input"
                    type="text"
                    value={value}
                    onChange={handleColorChange}
                />
            </label>
        </>
    );
}

export default ColorInput;
