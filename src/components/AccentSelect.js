import React, { useState, useEffect } from "react";
import AccentColorScheme from "./AccentColorScheme";
import tinycolor from "tinycolor2";

function AccentSelect({ primary, color, onAccentChange }) {
    const [value, setValue] = useState(color);
    const [analogous, setAnalogous] = useState([]);

    useEffect(() => {
        if (analogous.length <= 0) {
            getAnalogousColors();
        }
    });

    function handleAccentChange(event) {
        setValue(event.target.value);
        onAccentChange(event.target.value);
    }

    function getAnalogousColors() {
        const options = tinycolor(primary).analogous();
        let hexCodes = [];
        options.forEach((obj) => {
            const color = obj.toHexString();
            if (!hexCodes.includes(color)) {
                hexCodes.push(color);
            }
        });
        setAnalogous([...hexCodes]);
    }

    return (
        <section className="accent-select">
            <h2>Accent select</h2>
            <AccentColorScheme name="Analogous" colors={analogous} />

            <label htmlFor="accent-input">Or add a custom color:</label>
            <input
                className="color-select__input"
                type="text"
                name="accent-input"
                id="accent-input"
                value={value}
                onChange={handleAccentChange}
            />
        </section>
    );
}

export default AccentSelect;
