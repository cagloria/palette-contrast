import React from "react";
import ColorInput from "../ColorInput";

function AccentText({ accentText, onAccentTextChange }) {
    function handleAccentTextChange(value) {
        onAccentTextChange(value);
    }

    return (
        <div>
            <ColorInput
                color={accentText}
                fieldLabel="Text on an accent background"
                onColorChange={handleAccentTextChange}
            />
        </div>
    );
}

export default AccentText;
