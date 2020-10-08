import React, { useState } from "react";
import styled from "styled-components";
import AccentColorScheme from "./AccentColorScheme";

const SchemesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
`;

function AccentSelect({ primary, accent, onAccentChange }) {
    const [currentAccent, setValue] = useState(accent);

    function handleAccentFieldChange(event) {
        setValue(event.target.value);
        onAccentChange(event.target.value);
    }

    function handleAccentButtonSelect(color) {
        setValue(color);
        onAccentChange(color);
    }

    return (
        <section className="accent-select">
            <h2>Accent select</h2>
            <p>Choose an accent color:</p>

            <SchemesContainer>
                <AccentColorScheme
                    schemeName="Analogous"
                    primary={primary}
                    currentAccent={currentAccent}
                    onAccentSelect={handleAccentButtonSelect}
                />

                <AccentColorScheme
                    schemeName="Monochromatic"
                    primary={primary}
                    currentAccent={currentAccent}
                    onAccentSelect={handleAccentButtonSelect}
                />

                <AccentColorScheme
                    schemeName="Split-complement"
                    primary={primary}
                    currentAccent={currentAccent}
                    onAccentSelect={handleAccentButtonSelect}
                />

                <AccentColorScheme
                    schemeName="Triad"
                    primary={primary}
                    currentAccent={currentAccent}
                    onAccentSelect={handleAccentButtonSelect}
                />

                <AccentColorScheme
                    schemeName="Tetrad"
                    primary={primary}
                    currentAccent={currentAccent}
                    onAccentSelect={handleAccentButtonSelect}
                />

                <AccentColorScheme
                    schemeName="Complement"
                    primary={primary}
                    currentAccent={currentAccent}
                    onAccentSelect={handleAccentButtonSelect}
                />
            </SchemesContainer>

            <label htmlFor="accent-input">
                Or type in a custom accent color:
            </label>
            <input
                className="color-select__input"
                type="text"
                name="accent-input"
                id="accent-input"
                value={currentAccent}
                onChange={handleAccentFieldChange}
            />
        </section>
    );
}

export default AccentSelect;
