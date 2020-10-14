import React, { useState, useEffect } from "react";
import tinycolor from "tinycolor2";
import AccentButton from "./AccentButton";

/**
 * Converts an array of tinycolor objects to hex codes.
 * @param {Object} objArr Array of tinycolor objects
 */
function convertArrToHex(objArr, primary) {
    let hexCodes = [];

    objArr.forEach((obj) => {
        const color = obj.toHexString();
        if (!hexCodes.includes(color) && color !== primary) {
            hexCodes.push(color);
        }
    });

    return hexCodes;
}

/**
 * Returns an array of accent colors based on the primary.
 */
const schemeSelect = {
    Analogous: {
        getScheme(primary) {
            const objArr = tinycolor(primary).analogous();
            return convertArrToHex(objArr, primary);
        },
    },
    Monochromatic: {
        getScheme(primary) {
            const objArr = tinycolor(primary).monochromatic();
            return convertArrToHex(objArr, primary);
        },
    },
    "Split-complement": {
        getScheme(primary) {
            const objArr = tinycolor(primary).splitcomplement();
            return convertArrToHex(objArr, primary);
        },
    },
    Triad: {
        getScheme(primary) {
            const objArr = tinycolor(primary).triad();
            return convertArrToHex(objArr, primary);
        },
    },
    Tetrad: {
        getScheme(primary) {
            const objArr = tinycolor(primary).tetrad();
            return convertArrToHex(objArr, primary);
        },
    },
    Complement: {
        getScheme(primary) {
            const accent = tinycolor(primary).complement();
            return [accent.toHexString()];
        },
    },
};

function AccentColorScheme({
    primary,
    schemeName,
    currentAccent,
    onAccentSelect,
}) {
    const [colorsArr, setColors] = useState(
        schemeSelect[schemeName].getScheme(primary)
    );

    useEffect(() => {
        setColors(schemeSelect[schemeName].getScheme(primary));
    }, [primary, schemeName]);

    function handleAccentSelect(color) {
        onAccentSelect(color);
    }

    return (
        <>
            <h3 className="accent-color-scheme__header">{schemeName}</h3>
            <div className="accent-color-scheme__colors-container">
                {colorsArr.map((color) => (
                    <AccentButton
                        color={color}
                        key={color}
                        currentAccent={currentAccent}
                        onAccentSelect={handleAccentSelect}
                    />
                ))}
            </div>
        </>
    );
}

export default AccentColorScheme;
