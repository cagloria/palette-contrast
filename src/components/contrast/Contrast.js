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

            <div className="contrast-information">
                <p>
                    Level AA requires a contrast ratio of 4.5:1 for normal text and
                    3:1 for large text, and a contrast ratio of 3:1 for user
                    interface components. Level AAA requires a contrast ratio of 7:1
                    for normal text and 4.5:1 for large text.
                </p>
                <p>
                    Large text is defined as being at least 18pt (24px) or 14pt
                    (19px) bold. Read more about{" "}
                    <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html">
                        Level AA contrast
                    </a>
                    ,{" "}
                    <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast">
                        Level AA non-text contrast
                    </a>
                    , and{" "}
                    <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced">
                        Level AAA contrast
                    </a>
                    .
                </p>
            </div>

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
