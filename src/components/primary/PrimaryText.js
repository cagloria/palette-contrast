import React from "react";
import ColorInput from "../ColorInput";

function PrimaryText({ primaryText, onPrimaryTextChange }) {
    function handlePrimaryTextChange(value) {
        onPrimaryTextChange(value);
    }

    return (
        <div>
            <ColorInput
                color={primaryText}
                fieldID="input-primary-text"
                fieldLabel="Text on a primary background"
                onColorChange={handlePrimaryTextChange}
            />
        </div>
    );
}

export default PrimaryText;
