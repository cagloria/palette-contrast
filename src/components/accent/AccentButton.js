import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Color = styled.button`
    background-color: ${(props) => props.color};
    border: 5px solid
        ${(props) => (props.isSelected ? "#f7f7f7" : "transparent")};
`;

function AccentButton({ color, currentAccent, onAccentSelect }) {
    const [isSelected, setIsSelected] = useState(color === currentAccent);

    useEffect(() => {
        setIsSelected(color === currentAccent);
    }, [color, currentAccent]);

    function handleAccentSelect() {
        onAccentSelect(color);
    }

    return (
        <Color
            className="accent-button"
            color={color}
            isSelected={isSelected}
            onClick={handleAccentSelect}
        ></Color>
    );
}

export default AccentButton;
