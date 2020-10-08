import React, { useState } from "react";
import PrimarySelect from "./PrimarySelect";
import AccentSelect from "./accent/AccentSelect";
import Contrast from "./contrast/Contrast";

function App() {
    const [primary, setPrimary] = useState("#10a381");
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
                primary={primary}
                onPrimaryChange={handlePrimaryChange}
            />
            <AccentSelect
                primary={primary}
                accent={accent}
                onAccentChange={handleAccentChange}
            />
            <Contrast primary={primary} accent={accent} />
        </div>
    );
}

export default App;
