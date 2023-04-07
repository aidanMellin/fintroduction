import React, { useState, useEffect, useRef } from 'react';

function useCalculateTotalHeight(selector: string, activeDropdown: string | number | null): number {
    const [totalHeight, setTotalHeight] = useState(0);

    useEffect(() => {
        function calculateTotalHeight() {
            const vh = window.outerHeight;
            const allDivs = document.querySelectorAll(selector);
            let heightSum = 200;
            allDivs.forEach((div) => {
                heightSum += (div as HTMLElement).offsetHeight;
            });

            if (activeDropdown != null) {
                const subModules = document.querySelectorAll(".subModule");
                subModules.forEach((module) => {
                    heightSum += (module as HTMLElement).offsetHeight;
                });
            }
            
            const totalHeight = Math.min(heightSum, vh * 2.5);
            setTotalHeight(totalHeight);
        }


        calculateTotalHeight();

        window.addEventListener("resize", calculateTotalHeight);

        return () => {
            window.removeEventListener("resize", calculateTotalHeight);
        };
    }, [selector, activeDropdown]);

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
