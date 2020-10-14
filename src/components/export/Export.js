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

    return (
        <section className="component-panel">
            <h2>Export</h2>

            <fieldset onChange={handleRadioChange}>
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
                value={textareaValue}
                onChange={handleTextareaChange}
                rows="6"
                cols="30"
            />
        </section>
    );
}
