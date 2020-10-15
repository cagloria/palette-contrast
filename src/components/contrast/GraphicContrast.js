import React from "react";
import styled from "styled-components";
import ContrastTest from "./ContrastTest";

const Panel1 = styled.div`
    background-color: ${(props) => props.color};
`;

const Panel2 = styled.div`
    background-color: ${(props) => props.color};
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
                <div className="graphic-panel-container">
                    <Panel1 className="graphic-panel-1" color={color1} />
                    <Panel2 className="graphic-panel-2" color={color2} />
                </div>
            </div>
        </div>
    );
}
