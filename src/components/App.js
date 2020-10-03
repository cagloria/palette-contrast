import React, { useState } from "react";
import PrimarySelect from "./PrimarySelect";
import Contrast from "./Contrast";

function App() {
    const [primary, setPrimary] = useState("#CCCCCC");

    function handlePrimaryChange(value) {
        setPrimary(value);
    }

    return (
        <div className="App">
            <PrimarySelect
                color={primary}
                onPrimaryChange={handlePrimaryChange}
            />
            <Contrast primary={primary} />
        </div>
    );
}

export default App;
