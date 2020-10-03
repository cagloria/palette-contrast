import React from "react";
import styled from "styled-components";

const Color = styled.button`
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.color};
    border: 0;
    border-radius: 8px;
`;

const SchemeContainer = styled.div`
    display: flex;
`;

function AccentColorScheme({ name, colors }) {
    return (
        <div>
            <h3>{name}</h3>
            <SchemeContainer>
                {colors.map((color) => (
                    <Color color={color} key={color}></Color>
                ))}
            </SchemeContainer>
        </div>
    );
}

export default AccentColorScheme;
