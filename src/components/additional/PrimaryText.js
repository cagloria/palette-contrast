import React from "react";
import ColorInput from "../ColorInput";

function PrimaryText({ primaryText, onPrimaryTextChange }) {
    function handlePrimaryTextChange(value) {
        onPrimaryTextChange(value);
    }

    return (
        <>
            <ColorInput
                color={primaryText}
                fieldID="input-primary-text"
                fieldLabel="Text on primary"
                onColorChange={handlePrimaryTextChange}
            />
        </>
    );
}

export default PrimaryText;
