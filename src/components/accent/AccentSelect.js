import React, { useState, useEffect } from "react";
import AccentColorScheme from "./AccentColorScheme";

function AccentSelect({ primary, accent, onAccentChange }) {
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
        <section>
            <h2>Accent select</h2>
            <p>Choose an accent color:</p>

            <button
                onClick={previousScheme}
                aria-label="See previous color scheme"
            >
                {"<"}
            </button>

            <AccentColorScheme
                schemeName={displayedScheme}
                primary={primary}
                currentAccent={currentAccent}
                onAccentSelect={handleAccentButtonSelect}
            />

            <button
                onClick={nextScheme}
                aria-label="See next color scheme"
            >
                {">"}
            </button>

            <label>
                Or type in a custom accent color:
                <input
                    type="text"
                    value={currentAccent}
                    onChange={handleAccentFieldChange}
                />
            </label>
        </section>
    );
}

export default AccentSelect;
