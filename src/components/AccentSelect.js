import React, { useState } from "react";
import AccentColorScheme from "./AccentColorScheme";

function AccentSelect({ primary, accent, onAccentChange }) {
    const [currentAccent, setValue] = useState(accent);

    function handleAccentFieldChange(event) {
        setValue(event.target.value);
        onAccentChange(event.target.value);
    }

    function handleAccentButtonSelect(color) {
        setValue(color);
        onAccentChange(color);
    }

    return (
        <section className="accent-select">
            <h2>Accent select</h2>
            <p>Choose an accent color:</p>

            <AccentColorScheme
                schemeName="Analogous"
                primary={primary}
                currentAccent={currentAccent}
                onAccentSelect={handleAccentButtonSelect}
            />

            <label htmlFor="accent-input">Or type in a custom color:</label>
            <input
                className="color-select__input"
                type="text"
                name="accent-input"
                id="accent-input"
                value={currentAccent}
                onChange={handleAccentFieldChange}
            />
        </section>
    );
}

export default AccentSelect;
