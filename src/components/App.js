import React, { useState } from "react";
import PrimarySelect from "./PrimarySelect";

function App() {
    const [primary, setPrimary] = useState("#CCCCCC");

    function handlePrimaryChange(value) {
        setPrimary(value);
    }

    return (
        <div className="App">
            <h2>Primary Color</h2>
            <PrimarySelect
                color={primary}
                onPrimaryChange={handlePrimaryChange}
            />
        </div>
    );
}

export default App;
