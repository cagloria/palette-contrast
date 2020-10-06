import React, { useState, useEffect } from "react";
import AccentButton from "./AccentButton";
import styled from "styled-components";
import tinycolor from "tinycolor2";

const SchemeContainer = styled.div`
    display: flex;
`;

/**
 * Converts an array of tinycolor objects to hex codes.
 * @param {Object} objArr Array of tinycolor objects
 */
function getHexCodes(objArr) {
    let hexCodes = [];

    objArr.forEach((obj) => {
        const color = obj.toHexString();
        if (!hexCodes.includes(color)) {
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
            return getHexCodes(objArr);
        },
    },
};

function AccentColorScheme({ primary, schemeName, onAccentSelect }) {
    const [colorsInScheme, setColors] = useState(
        schemeSelect[schemeName].getScheme(primary)
    );

    useEffect(() => {
        setColors(schemeSelect[schemeName].getScheme(primary));
    }, [primary, schemeName]);

    function handleAccentSelect(color) {
        onAccentSelect(color);
    }

    return (
        <div>
            <h3>{schemeName}</h3>
            <SchemeContainer>
                {colorsInScheme.map((color) => (
                    <AccentButton
                        color={color}
                        key={color}
                        onAccentSelect={handleAccentSelect}
                    />
                ))}
            </SchemeContainer>
        </div>
    );
}

export default AccentColorScheme;
