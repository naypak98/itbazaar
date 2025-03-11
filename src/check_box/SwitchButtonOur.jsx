import React, { useState } from "react";
import "./SwitchButtonOur.css"; // Подключаем стили

function SwitchButtonOur() {
    const [checkedItems, setCheckedItems] = useState([false, false, false]);

    const handleChange = (index) => {
        const newCheckedItems = [...checkedItems];
        const checkedCount = newCheckedItems.filter(Boolean).length;


        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };

    return (
        <div className="our-demo">
            <p className="our-heading">Работа с нами</p>
            <div className="our-demo__content">
                {["Быстро", "Качественно", "Дешево"].map((label, index) => (
                    <label key={index} className="our-switcher">
                        <input
                            type="checkbox"
                            checked={checkedItems[index]}
                            onChange={() => handleChange(index)}
                        />
                        <span className="our-switcher__indicator"></span>
                        <span>{label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

export default SwitchButtonOur;
