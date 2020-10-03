import React from "react";
import GraphicContrast from "./GraphicContrast";
import TextContrast from "./TextContrast";

function Contrast({ primary }) {
    return (
        <section className="contrast">
            <h2>Contrast check</h2>
            <GraphicContrast color1={primary} />
            <TextContrast bgColor={primary} />
        </section>
    );
}

export default Contrast;
