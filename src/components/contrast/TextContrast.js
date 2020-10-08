import React from "react";
import styled from "styled-components";
import ContrastTest from "./ContrastTest";

const Panel = styled.div`
    width: 200px;
    border-radius: 8px;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.textColor};
`;

const ExampleHeader = styled.div`
    p {
        font-size: 1.5em;
        margin: 8px 0;
    }
`;

function TextContrast({ header, level, textColor, bgColor }) {
    return (
        <div>
            <h3>{header}</h3>
            <Panel bgColor={bgColor} textColor={textColor}>
                <ExampleHeader>
                    <ContrastTest
                        level={level}
                        color1={textColor}
                        color2={bgColor}
                        size="large"
                    />
                    <p>Header</p>
                </ExampleHeader>

                <div>
                    <ContrastTest
                        level={level}
                        color1={textColor}
                        color2={bgColor}
                        size="small"
                    />
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </Panel>
        </div>
    );
}

export default TextContrast;
