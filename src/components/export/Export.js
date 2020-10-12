import React, { useState } from "react";

export default function Export({
    primary,
    accent,
    bodyText,
    background,
    primaryText,
    accentText,
}) {
    const [value, setValue] = useState("");

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <section>
            <h2>Export</h2>

            <textarea
                value={value}
                onChange={handleChange}
                rows="5"
                cols="30"
            />
        </section>
    );
}
