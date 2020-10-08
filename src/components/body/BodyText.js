import React from "react";
import ColorInput from "../ColorInput";

function BodyText({ bodyText, onBodyTextChange }) {
    function handleBodyTextChange(value) {
        onBodyTextChange(value);
    }

    return (
        <div>
            <p>Body text</p>
            <ColorInput color={bodyText} onColorChange={handleBodyTextChange} />
        </div>
    );
}

export default BodyText;
