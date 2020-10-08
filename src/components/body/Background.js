import React from "react";
import ColorInput from "../ColorInput";

function Background({ background, onBackgroundChange }) {
    function handleBackgroundChange(value) {
        onBackgroundChange(value);
    }

    return (
        <div>
            <ColorInput
                color={background}
                fieldID="input-background"
                fieldLabel="Background color"
                onColorChange={handleBackgroundChange}
            />
        </div>
    );
}

export default Background;
