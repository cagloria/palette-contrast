import React from "react";
import ColorInput from "../ColorInput";

function Background({ background, onBackgroundChange }) {
    function handleBackgroundChange(value) {
        onBackgroundChange(value);
    }

    return (
        <div>
            <p>Background</p>
            <ColorInput
                color={background}
                onColorChange={handleBackgroundChange}
            />
        </div>
    );
}

export default Background;
