import React from "react";
import ColorInput from "../ColorInput";

function BodyText({ bodyText, onBodyTextChange }) {
    function handleBodyTextChange(value) {
        onBodyTextChange(value);
    }

    return (
        <>
            <ColorInput
                color={bodyText}
                fieldID="input-body-text"
                fieldLabel="Body text color"
                onColorChange={handleBodyTextChange}
            />
        </>
    );
}

export default BodyText;
