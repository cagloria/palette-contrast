import React from "react";
import styled from "styled-components";

const Panel = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 8px;
    background-color: ${(props) => props.color};
`;

function ColorSelect({ color }) {
    return (
        <>
            <Panel color={color} />
            <div>{color}</div>
        </>
    );
}

export default ColorSelect;
