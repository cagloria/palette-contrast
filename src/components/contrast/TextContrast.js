import React from "react";
import styled from "styled-components";

const Panel = styled.div`
    width: 200px;
    height: 100px;
    border-radius: 8px;
    background-color: ${(props) => props.color};
`;

function TextContrast({ bgColor }) {
    return <Panel color={bgColor}>Lorem ipsum dolor sit amet.</Panel>;
}

export default TextContrast;
