import React, { useState, useEffect } from "react";
import tinycolor from "tinycolor2";

export default function ContrastTest({ level, color1, color2, size }) {
    const [ratio, setRatio] = useState(0);
    const [passes, setPasses] = useState(false);

    useEffect(() => {
        setRatio(tinycolor.readability(color1, color2));

        const levelVal = level;
        let sizeVal = size;
        if (sizeVal === "graphics") {
            // Level AA has a required contrast ratio of 3:1 for both large text
            // and graphic/UI components
            sizeVal = "large";
        }
        setPasses(
            tinycolor.isReadable(color1, color2, {
                level: levelVal,
                size: sizeVal,
            })
        );
    }, [color1, color2, level, size, ratio, passes]);

    return (
        <div>
            {passes} {ratio}
        </div>
    );
}
