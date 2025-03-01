import React, { useEffect } from "react";
import "./AnimatedText.css"; // Стили вынесены в отдельный файл

const COLORS = ["#fefefe", "#ff9b00", "#ff3434", "#db38f0", "#0096fb", "#00c500", "#ffd200"];

const AnimatedText = () => {
    useEffect(() => {
        const textElements = document.querySelectorAll(".text");
        textElements.forEach((text, index) => {
            text.style.color = COLORS[index % COLORS.length];
        });
    }, []);

    return (
        <div className="container">
            <div className="text-container" style={{width: '20%', marginLeft: '10vw'}}>
                {[...Array(7)].map((_, i) => (
                    <span key={i} className={`text ${i === 0 ? '' : ''}`}>
                BAZAAR
                        {i === 0 && (
                            <div className="icon--container">
                                {[...Array(4)].map((_, j) => (
                                    <svg key={j} className="icon star">
                                        <use xlinkHref="#star"/>
                                    </svg>
                                ))}
                            </div>
                        )}
              </span>
                ))}
            </div>

        </div>
    );
};

export default AnimatedText;
