import React, { useState } from "react";
import PrimarySelect from "./PrimarySelect";
import AccentSelect from "./AccentSelect";
import Contrast from "./Contrast";

function App() {
    const [primary, setPrimary] = useState("#CCCCCC");
    const [accent, setAccent] = useState("#b50c00");

    function handlePrimaryChange(value) {
        setPrimary(value);
    }

    function handleAccentChange(value) {
        setAccent(value);
    }

    return (
        <div className="App">
            <PrimarySelect
                color={primary}
                onPrimaryChange={handlePrimaryChange}
            />
            <AccentSelect color={accent} onAccentChange={handleAccentChange} />
            <Contrast primary={primary} accent={accent} />
        </div>
    );
}

export default App;
