import React, { useState } from "react";
import "./SwitchButton.css"; // Подключаем стили

function SwitchButton() {
    const [checked, setChecked] = useState(true);

    return (
        <div className="demo">
            <p className="heading">Работа с другими компаниями</p>
            <div className="demo__content">
                <label className="switcher">
                    <input type="checkbox" />
                    <span className="switcher__indicator"></span>
                    <span>Normal</span>
                </label>

                <br /><br />

                <label className="switcher">
                    <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
                    <span className="switcher__indicator"></span>
                    <span>Checked</span>
                </label>

                <br /><br />

                <label className="switcher">
                    <input type="checkbox" disabled />
                    <span className="switcher__indicator"></span>
                    <span>Disabled</span>
                </label>

                <br /><br />

                <label className="switcher">
                    <input type="checkbox" disabled checked />
                    <span className="switcher__indicator"></span>
                    <span>Disabled Checked</span>
                </label>
            </div>
        </div>
    );
}

export default SwitchButton;
