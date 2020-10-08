import React from "react";
import ColorInput from "../ColorInput";

function PrimarySelect({ primary, onPrimaryChange }) {
    function handlePrimaryChange(value) {
        onPrimaryChange(value);
    }

    return (
        <section className="primary-select">
            <h2>Primary select</h2>
            <ColorInput color={primary} onColorChange={handlePrimaryChange} />
        </section>
    );
}

export default PrimarySelect;
