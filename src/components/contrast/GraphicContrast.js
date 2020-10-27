import React from "react";
import styled from "styled-components";
import ContrastTest from "./ContrastTest";

const Color1 = styled.div`
    background-color: ${(props) => props.color};
`;

const Color2 = styled.div`
    background-color: ${(props) => props.color};
`;

export default function GraphicContrast({ color1, color2 }) {
    return (
        <div className="graphic-contrast">
            <h3>Primary and accent</h3>

            <div className="graphic-contrast__colors-container">
                <Color1 className="graphic-contrast__color-1" color={color1} />
                <Color2 className="graphic-contrast__color-2" color={color2} />
            </div>

            {/* Graphics/UI component contrast ratio is defined only in level AA
                as 3:1, the same as large text */}
            <ContrastTest
                level="AA"
                color1={color1}
                color2={color2}
                size="large"
            />
        </div>
    );
}
