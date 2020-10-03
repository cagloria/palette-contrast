import React from "react";
import styled from "styled-components";

const Color = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.color};
`;

function AccentColorScheme({ name, colors }) {
    return (
        <div>
            <h3>{name}</h3>
            {colors.map((color) => (
                <Color color={color} key={color}></Color>
            ))}
        </div>
    );
}

export default AccentColorScheme;
