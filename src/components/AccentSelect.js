import React, { useState } from "react";
import AccentColorScheme from "./AccentColorScheme";

function AccentSelect({ primary, color, onAccentChange }) {
    const [value, setValue] = useState(color);

    function handleAccentChange(event) {
        setValue(event.target.value);
        onAccentChange(event.target.value);
    }

    return (
        <section className="accent-select">
            <h2>Accent select</h2>
            <AccentColorScheme scheme="Analogous" primary={primary} />

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
