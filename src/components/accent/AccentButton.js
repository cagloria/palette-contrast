import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Color = styled.button`
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.color};
    border: 5px solid ${(props) => (props.isSelected ? "black" : "transparent")};
    border-radius: 8px;
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
            color={color}
            isSelected={isSelected}
            onClick={handleAccentSelect}
        ></Color>
    );
}

export default AccentButton;
