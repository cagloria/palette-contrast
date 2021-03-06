import React from "react";
import styled from "styled-components";
import ContrastTest from "./ContrastTest";

const Panel = styled.div`
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.textColor};
`;

function TextContrast({ header, level, textColor, bgColor }) {
    return (
        <div className="text-contrast">
            <h3>{header}</h3>
            <Panel
                className="text-contrast__panel"
                bgColor={bgColor}
                textColor={textColor}
            >
                <p className="text-contrast__header">Large text</p>
                <ContrastTest
                    level={level}
                    color1={textColor}
                    color2={bgColor}
                    size="large"
                />

                <p className="text-contrast__body">Small text</p>
                <ContrastTest
                    level={level}
                    color1={textColor}
                    color2={bgColor}
                    size="small"
                />
            </Panel>
        </div>
    );
}

export default TextContrast;
