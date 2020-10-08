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
                <GraphicContrast color1={primary} color2={accent} />

                <TextContrast
                    header="Body text on background"
                    level={level}
                    textColor={bodyText}
                    bgColor={background}
                />

                <TextContrast
                    header="Text on primary"
                    level={level}
                    textColor={primaryText}
                    bgColor={primary}
                />

                <TextContrast
                    header="Text on accent"
                    level={level}
                    textColor={accentText}
                    bgColor={accent}
                />
            </ContrastPanels>
        </section>
    );
}
