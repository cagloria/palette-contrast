import React from "react";
import ColorSelect from "./ColorSelect";

function PrimarySelect({ color }) {
    return (
        <div>
            <ColorSelect color={color} />
        </div>
    );
}

export default PrimarySelect;
