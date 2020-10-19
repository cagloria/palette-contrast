import React, { useState } from "react";
import PrimarySection from "./primary/PrimarySection";
import AccentSection from "./accent/AccentSection";
import BodyText from "./additional/BodyText";
import Background from "./additional/Background";
import PrimaryText from "./additional/PrimaryText";
import AccentText from "./additional/AccentText";
import ContrastSection from "./contrast/ContrastSection";
import ExportSection from "./export/ExportSection";

function App() {
    const [primary, setPrimary] = useState("#10a381");
    const [accent, setAccent] = useState("#3710a3");
    const [bodyText, setBodyText] = useState("#1f1f1f");
    const [background, setBackground] = useState("#e3e3e3");
    const [primaryText, setPrimaryText] = useState("#1f1f1f");
    const [accentText, setAccentText] = useState("#e3e3e3");

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

    function handlePrimaryTextChange(value) {
        setPrimaryText(value);
    }

    function handleAccentTextChange(value) {
        setAccentText(value);
    }

    return (
        <main className="App">
            <PrimarySection
                primary={primary}
                onPrimaryChange={handlePrimaryChange}
            />
            <AccentSection
                primary={primary}
                accent={accent}
                onAccentChange={handleAccentChange}
            />

            <section className="component-panel additional-colors-section">
                <h2>Additional colors</h2>
                <div className="additional-colors-container">
                    <BodyText
                        bodyText={bodyText}
                        onBodyTextChange={handleBodyTextChange}
                    />
                    <Background
                        background={background}
                        onBackgroundChange={handleBackgroundChange}
                    />
                    <PrimaryText
                        primaryText={primaryText}
                        onPrimaryTextChange={handlePrimaryTextChange}
                    />
                    <AccentText
                        accentText={accentText}
                        onAccentTextChange={handleAccentTextChange}
                    />
                </div>
            </section>

            <ContrastSection
                primary={primary}
                primaryText={primaryText}
                accent={accent}
                accentText={accentText}
                bodyText={bodyText}
                background={background}
            />

            <ExportSection
                primary={primary}
                accent={accent}
                bodyText={bodyText}
                background={background}
                primaryText={primaryText}
                accentText={accentText}
            />
        </main>
    );
}

export default App;
