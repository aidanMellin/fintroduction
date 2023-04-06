import ModuleEntry from '../templateModule.js'
import '../../universal-styles.css';
import useCalculateTotalHeight from '../../universal-functions.js'

import React, { useState, useEffect, useRef } from 'react';

const modAndLessons = [
    {
        name: "Introduction",
        content: "Introducing Financial Literacy!",
        lessons: ["Overview of the course content", "Definition of financial literacy", "Importance of financial literacy"]
    },
    {
        name: "Budgeting",
        content: "Let's talk about budgets",
        lessons: ["Definition and importance of budgeting", "Creating a budget plan", "Tracking expenses and income", "Adjusting the budget as needed", "Examples and case studies"]
    },
    {
        name: "Debt Management",
        content: "Break free and take charge",
        lessons: ["Definition and types of debt", "Strategies for paying off debt", "Managing credit cards and loans", "Debt consolidation and negotiation", "Examples and case studies"]
    },
    {
        name: "Savings and Investing",
        content: "Grow your wealth, invest with confidence.",
        lessons: ["Definition and importance of saving and investing", "Types of savings and investment accounts", "Setting financial goals", "Creating a savings and investment plan", "Risks and benefits of investing", "Examples and case studies"]
    },
    {
        name: "Credit Scores",
        content: "More than just a number",
        lessons: ["Definition and importance of credit scores", "Factors that affect credit scores", "How to check and monitor your credit score", "Strategies for improving your credit score", "Examples and case studies"]
    },
    {
        name: "Insurance",
        content: "Protect what matters most",
        lessons: ["Definition and types of insurance", "Importance of insurance", "How insurance works", "Choosing the right insurance coverage", "Examples and case studies"]
    },
    {
        name: "Taxes",
        content: "A necessary cost",
        lessons: ["Definition and types of taxes", "Tax filing requirements and deadlines", "Tax deductions and credits", "Strategies for minimizing taxes", "Examples and case studies"]
    },
    {
        name: "Historical Context",
        content: "Know the past, predict the future",
        lessons: ["Origins of financial literacy in ancient societies", "Development of coinage and currency", "Evolution of financial literacy in response to technological advancements and economic trends"]
    },
    {
        name: "Conclusion",
        content: "Let's wrap it up",
        lessons: ["Summary of course content", "Importance of applying financial literacy skills in real-world situations", "Additional resources for further learning."]
    },
]


function IntroToFinancialLiteracyModule() {
    const foregroundRef = useRef(null);
    const totalHeight = useCalculateTotalHeight(".module-entry");

    const handleScroll = () => {
        const foregroundScroll = foregroundRef.current.scrollTop;
        const parallaxElement = document.querySelector(".background-parallax");
        parallaxElement.style.transform = `translateY(-${foregroundScroll * 0.5}px)`;
    };

    return (
        <>
            <div className="background-parallax background-height"></div>
            <div className="foreground" ref={foregroundRef} onScroll={handleScroll}>
                {modAndLessons.map((module, index) => (
                    <ModuleEntry
                        key={index}
                        header={module.name}
                        content={module.content}
                        subModules={module.lessons}
                    />
                ))}
            </div>
        </>
    );
}


export default IntroToFinancialLiteracyModule;