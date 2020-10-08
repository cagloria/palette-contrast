import React, { useState } from "react";
import PrimarySelect from "./PrimarySelect";
import AccentSelect from "./accent/AccentSelect";
import BodyText from "./body/BodyText";
import Background from "./body/Background";
import Contrast from "./contrast/Contrast";

function App() {
    const [primary, setPrimary] = useState("#10a381");
    const [accent, setAccent] = useState("#b50c00");
    const [bodyText, setBodyText] = useState("#1f1f1f");
    const [background, setBackground] = useState("#e3e3e3");

    function handlePrimaryChange(value) {
        setPrimary(value);
    }

    function handleAccentChange(value) {
        setAccent(value);
    }

    function handleBodyTextChange(value) {
        setBodyText(value);
    }

    function handleBackgroundChange(value) {
        setBackground(value);
    }

    return (
        <div className="App">
            <PrimarySelect
                primary={primary}
                onPrimaryChange={handlePrimaryChange}
            />
            <AccentSelect
                primary={primary}
                accent={accent}
                onAccentChange={handleAccentChange}
            />

            <section className="additional-colors">
                <h2>Additional colors</h2>
                <BodyText
                    bodyText={bodyText}
                    onBodyTextChange={handleBodyTextChange}
                />
                <Background
                    background={background}
                    onBackgroundChange={handleBackgroundChange}
                />
            </section>

            <Contrast
                primary={primary}
                accent={accent}
                bodyText={bodyText}
                background={background}
            />
        </div>
    );
}

export default App;
