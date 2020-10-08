import React from "react";
import GraphicContrast from "./GraphicContrast";
import TextContrast from "./TextContrast";

function Contrast({ primary, accent }) {
    return (
        <section className="contrast">
            <h2>Contrast check</h2>

            <h3>Primary and accent</h3>
            <GraphicContrast color1={primary} color2={accent} />

            <h3>Text on primary</h3>
            <TextContrast bgColor={primary} />

            <h3>Text on accent</h3>
            <TextContrast bgColor={accent} />
        </section>
    );
}

export default Contrast;
