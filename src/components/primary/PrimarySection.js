import React from "react";
import ColorInput from "../ColorInput";

function PrimarySection({ primary, onPrimaryChange }) {
    function handlePrimaryChange(value) {
        onPrimaryChange(value);
    }

    return (
        <section className="component-panel primary-section">
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

export default PrimarySection;
