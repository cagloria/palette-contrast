import React from "react";
import ColorInput from "../ColorInput";

function BodyText({ bodyText, onBodyTextChange }) {
    function handleBodyTextChange(value) {
        onBodyTextChange(value);
    }

    return (
        <div>
            <ColorInput
                color={bodyText}
                fieldLabel="Body text color"
                onColorChange={handleBodyTextChange}
            />
        </div>
    );
}

export default BodyText;
