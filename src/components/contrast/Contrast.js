import React from "react";
import styled from "styled-components";
import GraphicContrast from "./GraphicContrast";
import TextContrast from "./TextContrast";

const ContrastSection = styled.section`
    > div {
        display: flex;
        flex-wrap: wrap;
    }
`;

function Contrast({
    primary,
    primaryText,
    accent,
    accentText,
    bodyText,
    background,
}) {
    return (
        <ContrastSection>
            <h2>Contrast check</h2>

            <div>
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
                    <TextContrast textColor={primaryText} bgColor={primary} />
                </div>

                <div>
                    <h3>Text on accent</h3>
                    <TextContrast textColor={accentText} bgColor={accent} />
                </div>
            </div>
        </ContrastSection>
    );
}

export default Contrast;
