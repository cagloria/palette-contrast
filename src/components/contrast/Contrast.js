import React, { useState } from "react";
import styled from "styled-components";
import GraphicContrast from "./GraphicContrast";
import TextContrast from "./TextContrast";

const ContrastPanels = styled.div`
    display: flex;
    flex-wrap: wrap;
    > div {
        display: flex;
        flex-direction: column;
    }
`;

const LevelButton = styled.button`
    span:first-child {
        margin-right: 20px;
    }

    .active {
        text-decoration: underline;
        font-weight: bold;
    }
`;

export default function Contrast({
    primary,
    primaryText,
    accent,
    accentText,
    bodyText,
    background,
}) {
    const [level, setLevel] = useState("AA");

    function changeLevel() {
        setLevel(level === "AA" ? "AAA" : "AA");
    }

    return (
        <section>
            <h2>Contrast check</h2>

            <LevelButton
                aria-label={`Switch level to ${level === "AA" ? "AAA" : "AA"}`}
                onClick={changeLevel}
            >
                <span className={level === "AA" ? "active" : ""}>AA</span>
                <span className={level === "AAA" ? "active" : ""}>AAA</span>
            </LevelButton>

            <ContrastPanels>
                <div>
                    <h3>Primary and accent</h3>
                    <GraphicContrast color1={primary} color2={accent} />
                </div>

                <div>
                    <h3>Body text on background</h3>
                    <TextContrast textColor={bodyText} bgColor={background} />
                </div>

                <div>
                    <h3>Text on primary</h3>
                    <TextContrast textColor={primaryText} bgColor={primary} />
                </div>

                <div>
                    <h3>Text on accent</h3>
                    <TextContrast textColor={accentText} bgColor={accent} />
                </div>
            </ContrastPanels>
        </section>
    );
}
