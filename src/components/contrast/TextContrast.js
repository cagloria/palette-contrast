import React from "react";
import styled from "styled-components";

const Panel = styled.div`
    width: 200px;
    height: 100px;
    border-radius: 8px;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.textColor};
`;

function TextContrast({ textColor, bgColor }) {
    return (
        <Panel bgColor={bgColor} textColor={textColor}>
            Lorem ipsum dolor sit amet.
        </Panel>
    );
}

export default TextContrast;
