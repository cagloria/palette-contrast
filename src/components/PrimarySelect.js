import React from "react";
import ColorSelect from "./ColorSelect";

function PrimarySelect({ color, onPrimaryChange }) {
    function handlePrimaryChange(value) {
        onPrimaryChange(value);
    }

    return (
        <section className="primary-select">
            <h2>Primary select</h2>
            <ColorSelect color={color} onColorChange={handlePrimaryChange} />
        </section>
    );
}

export default PrimarySelect;
