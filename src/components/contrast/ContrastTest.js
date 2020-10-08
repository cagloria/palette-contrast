import React, { useState, useEffect } from "react";
import tinycolor from "tinycolor2";

export default function ContrastTest({ level, color1, color2, size }) {
    const [ratio, setRatio] = useState(0);
    const [passes, setPasses] = useState("false");

    useEffect(() => {
        setRatio(tinycolor.readability(color1, color2));

        setPasses(
            `${tinycolor.isReadable(color1, color2, {
                level: level,
                size: size,
            })}`
        );
    }, [level, color1, color2, size]);

    return (
        <span>
            {passes} {ratio}
        </span>
    );
}
