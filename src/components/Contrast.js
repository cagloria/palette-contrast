import React from "react";
import GraphicContrast from "./GraphicContrast";

function Contrast({ primary }) {
    return (
        <section className="contrast">
            <h2>Contrast check</h2>
            <GraphicContrast color1={primary} />
        </section>
    );
}

export default Contrast;
