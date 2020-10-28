import React, { useState, useEffect } from "react";
import tinycolor from "tinycolor2";

export default function ContrastTest({ level, color1, color2, size }) {
    const [ratio, setRatio] = useState(0);
    const [passes, setPasses] = useState(false);

    useEffect(() => {
        const readability = tinycolor.readability(color1, color2);
        setRatio(Number(Math.round(readability + "e2") + "e-2"));

        setPasses(
            tinycolor.isReadable(color1, color2, {
                level: level,
                size: size,
            })
        );
    }, [level, color1, color2, size]);

    return (
        <span className="contrast-test">
            <span
                className={`contrast-test__icon contrast-test__icon--${
                    passes ? "passes" : "fails"
                }`}
                aria-label={passes ? "Passes" : "Fails"}
            ></span>{" "}
            <span className="contrast-icon__ratio">{ratio}</span>
        </span>
    );
}
