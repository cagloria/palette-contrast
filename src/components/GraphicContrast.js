import React from "react";
import styled from "styled-components";

const Panel1 = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 8px 0 0 8px;
    background-color: ${(props) => props.color1};
`;

function GraphicContrast({ color1 }) {
    return (
        <div className="graphic-panel">
            <Panel1 color1={color1} />
        </div>
    );
}

export default GraphicContrast;
