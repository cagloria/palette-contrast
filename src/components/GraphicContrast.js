import React from "react";
import styled from "styled-components";

const Panel1 = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 8px 0 0 8px;
    background-color: ${(props) => props.color};
`;

const Panel2 = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 0 8px 8px 0;
    background-color: ${(props) => props.color};
`;

function GraphicContrast({ color1, color2 }) {
    return (
        <div className="graphic-panel">
            <Panel1 color={color1} />
            <Panel2 color={color2} />
        </div>
    );
}

export default GraphicContrast;
