import React, { useState } from "react";
import GraphicContrast from "./GraphicContrast";
import TextContrast from "./TextContrast";

export default function ContrastSection({
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
        <section className="contrast-section">
            <h2>Contrast check</h2>

            <div className="contrast-section__information">
                <p>
                    Level AA requires a contrast ratio of 4.5:1 for normal text
                    and 3:1 for large text, and a contrast ratio of 3:1 for user
                    interface components. Level AAA requires a contrast ratio of
                    7:1 for normal text and 4.5:1 for large text.
                </p>
                <p>
                    Large text is defined as being at least 18pt (24px) or 14pt
                    (18.7px) bold. Read more about{" "}
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

            <div className="contrast-section__level-change">
                <p>Select your standard:</p>

                <button
                    className="level-button"
                    aria-label={`Switch level to ${
                        level === "AA" ? "AAA" : "AA"
                    }`}
                    onClick={changeLevel}
                >
                    <span className={level === "AA" ? "active" : ""}>AA</span>
                    <span className={level === "AAA" ? "active" : ""}>AAA</span>
                </button>
            </div>

            <div className="contrast-section__panels">
                <GraphicContrast color1={primary} color2={accent} />

                <TextContrast
                    header="Body text on background"
                    level={level}
                    textColor={bodyText}
                    bgColor={background}
                />

                <TextContrast
                    header="Text on a primary background"
                    level={level}
                    textColor={primaryText}
                    bgColor={primary}
                />

                <TextContrast
                    header="Text on an accent background"
                    level={level}
                    textColor={accentText}
                    bgColor={accent}
                />
            </div>
        </section>
    );
}
