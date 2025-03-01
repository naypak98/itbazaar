import React from "react";
import "./Background.css"; // Подключаем CSS

const Background = () => {
    // Создаем массивы чисел для верхней и левой стороны
    const cols = Array.from({ length: Math.ceil(window.innerWidth / (window.innerWidth * 0.04)) }, (_, i) => i);
    const rows = Array.from({ length: Math.ceil(window.innerHeight / (window.innerWidth * 0.04)) }, (_, i) => i);

    return (
        <div className="grid-container">
            {/* Верхние числа */}
            <div className="grid-numbers-top">
                {cols.map((num) => (
                    <div key={num} className="grid-number">{num}</div>
                ))}
            </div>

            <div className="grid-content">
                {/* Левые числа */}
                <div className="grid-numbers-left">
                    {rows.map((num) => (
                        <div key={num} className="grid-number">{num}</div>
                    ))}
                </div>

                {/* Фон сетки */}
                <div className="grid-background"></div>
            </div>
        </div>
    );
};

export default Background;
