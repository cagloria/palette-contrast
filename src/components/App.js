import React, { useState } from "react";
import styled from "styled-components";
import PrimarySelect from "./primary/PrimarySelect";
import AccentSelect from "./accent/AccentSelect";
import BodyText from "./body/BodyText";
import Background from "./body/Background";
import PrimaryText from "./primary/PrimaryText";
import Contrast from "./contrast/Contrast";

const AdditionalColors = styled.section`
    > div {
        display: flex;
        flex-wrap: wrap;
    }
`;

function App() {
    const [primary, setPrimary] = useState("#10a381");
    const [accent, setAccent] = useState("#b50c00");
    const [bodyText, setBodyText] = useState("#1f1f1f");
    const [background, setBackground] = useState("#e3e3e3");
    const [primaryText, setPrimaryText] = useState("#1f1f1f");

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

    return (
        <main className="App">
            <PrimarySelect
                primary={primary}
                onPrimaryChange={handlePrimaryChange}
            />
            <AccentSelect
                primary={primary}
                accent={accent}
                onAccentChange={handleAccentChange}
            />

            <AdditionalColors>
                <h2>Additional colors</h2>
                <div>
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
                </div>
            </AdditionalColors>

            <Contrast
                primary={primary}
                accent={accent}
                bodyText={bodyText}
                background={background}
            />
        </main>
    );
}

export default App;
