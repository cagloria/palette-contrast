import React, { useState } from "react";
import PrimarySelect from "./PrimarySelect";

function App() {
    const [primary, setPrimary] = useState("#CCCCCC");

    return (
        <div className="App">
            <PrimarySelect color={primary} />
        </div>
    );
}

export default App;
