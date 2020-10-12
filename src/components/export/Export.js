import React, { useState, useEffect } from "react";

export default function Export({
    primary,
    accent,
    bodyText,
    background,
    primaryText,
    accentText,
}) {
    const [value, setValue] = useState("");

    useEffect(() => {
        setValue(
            `--primary: ${primary};\n` +
                `--accent: ${accent};\n` +
                `--body-text: ${bodyText};\n` +
                `--background: ${background};\n` +
                `--primary-text: ${primaryText};\n` +
                `--accent-text: ${accentText};\n`
        );
    }, [primary, accent, bodyText, background, primaryText, accentText]);

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
