import React, { useState, useEffect } from "react";

export default function ExportSection({
    primary,
    accent,
    bodyText,
    background,
    primaryText,
    accentText,
}) {
    const [textareaValue, setTextareaValue] = useState("");
    const [radioValue, setRadioValue] = useState("css");

    useEffect(() => {
        if (radioValue === "scss") {
            setTextareaValue(
                `$primary: ${primary};\n` +
                    `$accent: ${accent};\n` +
                    `$body-text: ${bodyText};\n` +
                    `$background: ${background};\n` +
                    `$primary-text: ${primaryText};\n` +
                    `$accent-text: ${accentText};`
            );
        } else if (radioValue === "less") {
            setTextareaValue(
                `@primary: ${primary};\n` +
                    `@accent: ${accent};\n` +
                    `@body-text: ${bodyText};\n` +
                    `@background: ${background};\n` +
                    `@primary-text: ${primaryText};\n` +
                    `@accent-text: ${accentText};`
            );
        } else {
            setTextareaValue(
                `--primary: ${primary};\n` +
                    `--accent: ${accent};\n` +
                    `--body-text: ${bodyText};\n` +
                    `--background: ${background};\n` +
                    `--primary-text: ${primaryText};\n` +
                    `--accent-text: ${accentText};`
            );
        }
    }, [
        primary,
        accent,
        bodyText,
        background,
        primaryText,
        accentText,
        radioValue,
    ]);

    function handleTextareaChange(event) {
        setTextareaValue(event.target.value);
    }

    function handleRadioChange(event) {
        setRadioValue(event.target.value);
    }

    function copyColors() {
        const colorsTextarea = document.getElementById("export-textarea");
        colorsTextarea.select();
        document.execCommand("copy");
        colorsTextarea.blur();
    }

    return (
        <section className="component-panel export-section">
            <h2>Export</h2>

            <fieldset
                onChange={handleRadioChange}
                className="export-format-fieldset"
            >
                <legend>Select a format:</legend>
                <label>
                    <input
                        type="radio"
                        name="export-format"
                        value="css"
                        defaultChecked
                    />
                    CSS
                </label>
                <label>
                    <input type="radio" name="export-format" value="scss" />
                    SCSS
                </label>
                <label>
                    <input type="radio" name="export-format" value="less" />
                    Less
                </label>
            </fieldset>

            <textarea
                id="export-textarea"
                value={textareaValue}
                onChange={handleTextareaChange}
            />

            <button onClick={copyColors} className="dark-button">
                Copy to clipboard
            </button>
        </section>
    );
}
