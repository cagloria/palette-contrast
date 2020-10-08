import React from "react";
import styled from "styled-components";
import ContrastTest from "./ContrastTest";

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

export default function GraphicContrast({ color1, color2 }) {
    return (
        <div>
            <h3>Primary and accent</h3>
            <div>
                {/* Graphics/UI component contrast ratio is defined only in 
                    level AA as 3:1, the same as large text */}
                <ContrastTest
                    level="AA"
                    color1={color1}
                    color2={color2}
                    size="large"
                />
                <GraphicContainer>
                    <Panel1 color={color1} />
                    <Panel2 color={color2} />
                </GraphicContainer>
            </div>
        </div>
    );
}
