import React, { useState, useEffect, useRef, ReactElement, FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

type Module = {
    head: string;
    content: string;
    moduleLink: string;
    imageLink:string;
    credit:string;
    dataIndex: string;
}

const modules: Module[] = [
    {
        head: "Introduction to Financial Literacy",
        content: "In this introductory course, learn the fundamental concepts of financial literacy. This includes budgeting, debt management, saving and investing, credit scores, insurance, and taxes",
        moduleLink: "/intro_to_financial_literacy_module",
        imageLink: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        credit:"Photo by Micheile Henderson on Unsplash",
        dataIndex: "0"
    },
    {
        head: "Personal Finance",
        content: "Delve deeper into the topics covered in the introductory course focusing on developing a comprehensive financial plan. This course will cover retirement planning, investment strategies, and estate planning",
        moduleLink: "/personal_finance_module",
        dataIndex: "1",
        imageLink:"",
        credit:""
    },
    {
        head: "Financial Analysis",
        content: "Learn how to analyze financial statements and make informed decisions about investments and financial management. The course will cover financial ratios, cash flow analysis, and risk assessment",
        moduleLink: "/financial_analysis_module",
        dataIndex: "2",
        imageLink:"",
        credit:""
    },
    {
        head: "Investment Management",
        content: "Learn how to design and manage investment portfolios, focusing on maximizing returns and managing risk. This course will cover asset allocation, diversification, and portfolio optimization",
        moduleLink: "/investment_management_module",
        dataIndex: "3",
        imageLink:"https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        credit:"Photo by Isaac Smith on Unsplash"
    },
    {
        head: "Corporate Finance",
        content: "Learn how to analyze the financial performance of corporations, with a focus on capital budgeting, financial planning, and risk management. This course will cover financial statement analysis, capital structure, and corporate valuation",
        moduleLink: "/corporate_finance_module",
        dataIndex: "4",
        imageLink:"",
        credit:""
    },
    {
        head: "Financial Markets and Institutions",
        content: "Learn about the structure and function of financial markets and institutions, such as the role of banks, securities markets, and regulatory bodies. This course will cover market efficiency, portfolio management, and financial regulation",
        moduleLink: "financial_markets_and_institutions_module.html",
        dataIndex: "5",
        imageLink:"",
        credit:""
    }
];


/**
 * Learning modules section component that displays a single module and module navigation buttons.
 * 
 * @returns JSX element
 */
function LearningModules() {
    const [currentModule, setCurrentModule] = useState<Module>(modules[0]);
    let [modIndex, setModIndex] = useState<number>(0);

    const handleModuleButtonClicked = (indexProgress: number) => {
        const nextIndex = (modIndex + indexProgress + modules.length) % modules.length;
        setCurrentModule(modules[nextIndex]);
        setModIndex(nextIndex);
    };

    return (
        <section id="learning-modules">
            <h2>Choose a Learning Module</h2>
            <div className="module-container">
                <AddModule
                    key={modIndex}
                    head={currentModule.head}
                    content={currentModule.content}
                    moduleLink={currentModule.moduleLink}
                    dataIndex={currentModule.dataIndex}
                    imageLink={currentModule.imageLink}
                    credit={currentModule.credit}
                />
            </div>
            <ModuleButtons handleModuleButtonClicked={handleModuleButtonClicked} />
        </section>
    );
}

type AddModuleProps = {
    dataIndex: string;
    head: string;
    content: string;
    moduleLink: string;
    imageLink: string,
    credit: string,
};

/**
 * Component that adds a single module item to the Learning modules section.
 *
 * @param {Object} props - Properties object containing the module item data.
 * @param {string} props.dataStatus - The status of the module data.
 * @param {string} props.dataIndex - The index of the module data.
 * @param {string} props.head - The heading of the module item.
 * @param {string} props.content - The content of the module item.
 * @param {string} props.moduleLink - The URL of the module item link.
 *
 * @returns JSX element
 */
function AddModule({
    dataIndex,
    head,
    content,
    moduleLink,
    imageLink,
    credit,
}: AddModuleProps) {
    const [isActive, setIsActive] = useState(false);
    const [width] = useState(window.innerWidth);

    const toggleDropdown = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className="module"
            data-index={dataIndex}
        >
            <h3
                className={`dropdown-trigger ${isActive ? "active" : ""}`}
                onClick={toggleDropdown}
            >
                {head}
            </h3>
            {isActive || width > 768 ? (
                <p className="module-content">{content}</p>
            ) : (
                <button
                    className={`module-content-button dropdown-trigger ${isActive ? "active" : ""
                        } `}
                    onClick={toggleDropdown}
                >
                    Tap for more
                </button>
            )}
            <Link to={moduleLink}>
                <button>Start Module</button>
            </Link>
            <p className="counter">
                {parseInt(dataIndex) + 1} / {modules.length}
            </p>
        </div>
    );
}

interface ModuleButtonsProps {
    handleModuleButtonClicked: (indexProgress: number) => void;
}

function ModuleButtons({ handleModuleButtonClicked }: ModuleButtonsProps) {
    return (
        <div className="module-buttons">
            <button id="left-button" onClick={() => handleModuleButtonClicked(-1)}>
                <p>←</p>
            </button>
            <button id="right-button" onClick={() => handleModuleButtonClicked(1)}>
                <p>→</p>
            </button>
        </div>
    );
}

export default LearningModules;