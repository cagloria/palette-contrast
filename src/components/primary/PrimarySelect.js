import React from "react";
import ColorInput from "../ColorInput";

function PrimarySelect({ primary, onPrimaryChange }) {
    function handlePrimaryChange(value) {
        onPrimaryChange(value);
    }

    return (
        <section className="component-panel primary-select-section">
            <h2>Primary select</h2>
            <ColorInput
                color={primary}
                fieldID="input-primary"
                fieldLabel="Enter a primary color:"
                onColorChange={handlePrimaryChange}
            />
        </section>
    );
}

export default PrimarySelect;
