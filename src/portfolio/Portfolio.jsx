import React, { useState } from "react";
import "./Portfolio.css"; // Подключаем стили

const Portfolio = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const items = ["Проект 1", "Проект 2", "Проект 3", "Проект 4"];

    return (
        <div className="portfolio-container">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="portfolio-item"
                    style={{ flex: hoveredIndex === index ? 1.5 : 1 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <span>{item}</span>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;
