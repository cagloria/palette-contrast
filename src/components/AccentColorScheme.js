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

const schemeSelect = {
    Analogous: {
        getScheme(primary) {
            const colorObj = tinycolor(primary).analogous();
            let hexCodes = [];

            colorObj.forEach((obj) => {
                const color = obj.toHexString();
                if (!hexCodes.includes(color)) {
                    hexCodes.push(color);
                }
            });

            return hexCodes;
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
