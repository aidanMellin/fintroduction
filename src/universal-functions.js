import React, { useState, useEffect, useRef } from 'react';


function useCalculateTotalHeight(selector) {
    const [totalHeight, setTotalHeight] = useState(0);

    useEffect(() => {
        function calculateTotalHeight() {
            const allDivs = document.querySelectorAll(selector);
            let heightSum = 0;
            allDivs.forEach((div) => {
                heightSum += div.offsetHeight;
                heightSum += 2;
            });
            setTotalHeight(heightSum);
        }

        calculateTotalHeight();

        window.addEventListener("resize", calculateTotalHeight);

        return () => {
            window.removeEventListener("resize", calculateTotalHeight);
        };
    }, []);

    useEffect(() => {
        const styleElement = document.createElement("style");
        styleElement.innerHTML = `.background-height { height: ${totalHeight}px; }`;
        document.head.appendChild(styleElement);

        return () => {
            document.head.removeChild(styleElement);
        };
    }, [totalHeight]);

    return totalHeight;
}

export default useCalculateTotalHeight;