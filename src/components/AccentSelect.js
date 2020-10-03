import React from "react";
import ColorSelect from "./ColorSelect";

function AccentSelect({ color, onAccentChange }) {
    function handleAccentChange(value) {
        onAccentChange(value);
    }

    return (
        <section className="accent-select">
            <h2>Accent select</h2>
            <ColorSelect color={color} onColorChange={handleAccentChange} />
        </section>
    );
}

export default AccentSelect;
