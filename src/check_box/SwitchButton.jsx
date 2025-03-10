import React, { useState } from "react";
import "./SwitchButton.css"; // Подключаем стили

function SwitchButton() {
    const [checkedItems, setCheckedItems] = useState([false, false, false]);

    const handleChange = (index) => {
        const newCheckedItems = [...checkedItems];
        const checkedCount = newCheckedItems.filter(Boolean).length;

        if (!newCheckedItems[index] && checkedCount >= 2) return; // Запрещаем включать третий

        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };

    return (
        <div className="demo">
            <p className="heading">Работа с другими компаниями</p>
            <div className="demo__content">
                {["Быстро", "Качественно", "Дешево"].map((label, index) => (
                    <label key={index} className="switcher">
                        <input
                            type="checkbox"
                            checked={checkedItems[index]}
                            onChange={() => handleChange(index)}
                        />
                        <span className="switcher__indicator"></span>
                        <span>{label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

export default SwitchButton;
