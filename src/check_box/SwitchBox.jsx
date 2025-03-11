import React from "react";
import SwitchButton from "./SwitchButton.jsx";
import SwitchButtonOur from "./SwitchButtonOur.jsx";

function SwitchBox() {
    return (
        <div style={{ display: "flex", gap: "10vw", alignItems: "center" }}>
            <SwitchButton />
            <SwitchButtonOur />
        </div>
    );
}

export default SwitchBox;