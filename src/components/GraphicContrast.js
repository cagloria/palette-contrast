import React from "react";
import styled from "styled-components";

const Panel1 = styled.div`
    border-radius: 8px 0 0 8px;
    background-color: ${(props) => props.color};
`;

const Panel2 = styled.div`
    border-radius: 0 8px 8px 0;
    background-color: ${(props) => props.color};
`;

const GraphicContainer = styled.div`
    height: 100px;
    width: 200px;
    display: flex;
    > div {
        width: 50%;
    }
`;

function GraphicContrast({ color1, color2 }) {
    return (
        <GraphicContainer>
            <Panel1 color={color1} />
            <Panel2 color={color2} />
        </GraphicContainer>
    );
}

export default GraphicContrast;
