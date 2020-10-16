import React, { useState, useEffect } from "react";
import AccentColorScheme from "./AccentColorScheme";

function AccentSection({ primary, accent, onAccentChange }) {
    const [currentAccent, setValue] = useState(accent);
    const [schemeIndex, setSchemeIndex] = useState(0);
    const [displayedScheme, setDisplayedScheme] = useState("Analogous");

    const schemes = [
        "Analogous",
        "Monochromatic",
        "Split-complement",
        "Triad",
        "Tetrad",
        "Complement",
    ];

    useEffect(() => {
        if (schemeIndex < 0 || schemeIndex >= schemes.length) {
            setDisplayedScheme(schemes[0]);
            setSchemeIndex(0);
        } else {
            setDisplayedScheme(schemes[schemeIndex]);
        }
    }, [schemeIndex, schemes]);

    function nextScheme() {
        const nextIndex = schemeIndex + 1;

        if (schemeIndex >= schemes.length) {
            setSchemeIndex(0);
        } else {
            setSchemeIndex(nextIndex);
        }
    }

    function previousScheme() {
        const nextIndex = schemeIndex - 1;

        if (nextIndex < 0) {
            setSchemeIndex(schemes.length - 1);
        } else {
            setSchemeIndex(nextIndex);
        }
    }

    function handleAccentFieldChange(event) {
        setValue(event.target.value);
        onAccentChange(event.target.value);
    }

    function handleAccentButtonSelect(color) {
        setValue(color);
        onAccentChange(color);
    }

    return (
        <section className="component-panel accent-section">
            <h2>Accent select</h2>

            <button
                onClick={previousScheme}
                className="icon-button icon-button--previous"
                aria-label="See previous color scheme"
            ></button>

            <button
                onClick={nextScheme}
                className="icon-button icon-button--next"
                aria-label="See next color scheme"
            ></button>

            <AccentColorScheme
                schemeName={displayedScheme}
                primary={primary}
                currentAccent={currentAccent}
                onAccentSelect={handleAccentButtonSelect}
            />

            <div className="accent-input-container">
                <label htmlFor="input-accent">
                    Or type in a custom accent color:
                </label>
                <input
                    type="text"
                    id="input-accent"
                    value={currentAccent}
                    onChange={handleAccentFieldChange}
                />
            </div>
        </section>
    );
}

export default AccentSection;
