import React from "react";
import styled from "styled-components";

const Color = styled.button`
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.color};
    border: 0;
    border-radius: 8px;
`;

function AccentButton({ color, onAccentSelect }) {
    function handleAccentSelect() {
        onAccentSelect(color);
    }

    return <Color color={color} onClick={handleAccentSelect}></Color>;
}

export default AccentButton;
