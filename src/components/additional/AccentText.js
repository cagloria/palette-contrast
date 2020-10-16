import React from "react";
import ColorInput from "../ColorInput";

function AccentText({ accentText, onAccentTextChange }) {
    function handleAccentTextChange(value) {
        onAccentTextChange(value);
    }

    return (
        <>
            <ColorInput
                color={accentText}
                fieldID="input-accent-text"
                fieldLabel="Text on an accent background"
                onColorChange={handleAccentTextChange}
            />
        </>
    );
}

export default AccentText;
