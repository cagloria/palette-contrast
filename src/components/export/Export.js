import React, { useState, useEffect } from "react";

export default function Export({
    primary,
    accent,
    bodyText,
    background,
    primaryText,
    accentText,
}) {
    const [textareaValue, setTextareaValue] = useState("");
    const [radioValue, setRadioValue] = useState("");

    useEffect(() => {
        setTextareaValue(
            `--primary: ${primary};\n` +
                `--accent: ${accent};\n` +
                `--body-text: ${bodyText};\n` +
                `--background: ${background};\n` +
                `--primary-text: ${primaryText};\n` +
                `--accent-text: ${accentText};`
        );
    }, [primary, accent, bodyText, background, primaryText, accentText]);

    function handleTextareaChange(event) {
        setTextareaValue(event.target.value);
    }

    function handleRadioChange(event) {
        setRadioValue(event.target.value);
    }

    return (
        <section>
            <h2>Export</h2>

            <fieldset onChange={handleRadioChange}>
                <legend>Select a format:</legend>
                <label>
                    <input type="radio" name="export-format" value="css" />
                    CSS
                </label>
                <label>
                    <input type="radio" name="export-format" value="scss" />
                    SCSS
                </label>
                <label>
                    <input type="radio" name="export-format" value="sass" />
                    Sass
                </label>
                <label>
                    <input type="radio" name="export-format" value="less" />
                    Less
                </label>
            </fieldset>

            <textarea
                value={textareaValue}
                onChange={handleTextareaChange}
                rows="6"
                cols="30"
            />
        </section>
    );
}
