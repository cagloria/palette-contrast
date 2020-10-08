import React from "react";
import GraphicContrast from "./GraphicContrast";
import TextContrast from "./TextContrast";

function Contrast({ primary, accent, bodyText, background }) {
    return (
        <section className="contrast">
            <h2>Contrast check</h2>

            <div>
                <h3>Primary and accent</h3>
                <GraphicContrast color1={primary} color2={accent} />
            </div>

            <div>
                <h3>Body text on background</h3>
                <TextContrast textColor={bodyText} bgColor={background} />
            </div>

            <div>
                <h3>Text on primary</h3>
                <TextContrast bgColor={primary} />
            </div>

            <div>
                <h3>Text on accent</h3>
                <TextContrast bgColor={accent} />
            </div>
        </section>
    );
}

export default Contrast;
