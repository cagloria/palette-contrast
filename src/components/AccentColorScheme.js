import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tinycolor from "tinycolor2";

const Color = styled.button`
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.color};
    border: 0;
    border-radius: 8px;
`;

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

function AccentColorScheme({ primary, scheme }) {
    const [colors, setColors] = useState(
        schemeSelect[scheme].getScheme(primary)
    );

    useEffect(() => {
        setColors(schemeSelect[scheme].getScheme(primary));
    }, [primary, scheme]);

    return (
        <div>
            <h3>{scheme}</h3>
            <SchemeContainer>
                {colors.map((color) => (
                    <Color color={color} key={color}></Color>
                ))}
            </SchemeContainer>
        </div>
    );
}

export default AccentColorScheme;
