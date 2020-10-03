import React from "react";
import ColorSelect from "./ColorSelect";

function PrimarySelect({ color, onPrimaryChange }) {
    function handlePrimaryChange(value) {
        onPrimaryChange(value);
    }

    return (
        <div className="primary-select">
            <ColorSelect color={color} onColorChange={handlePrimaryChange} />
        </div>
    );
}

export default PrimarySelect;
