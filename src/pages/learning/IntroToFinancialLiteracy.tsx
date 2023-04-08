import '../../styles/universal-styles.css';
import useCalculateTotalHeight from '../../universal-functions';
import ModuleEntry, { ModuleLesson } from '../Module';
import React, { useState, useEffect, useRef, ReactElement, FC } from 'react';
import Navbar from '../../navbar';
import Chat from '../../Chat/Chat';

type Module = {
    name: string;
    content: string;
    lessons: ModuleLesson[];
};

const header = "/intro_to_financial_literacy_module";

const modAndLessons: Module[] = [
    {
        name: 'Introduction',
        content: 'Introducing Financial Literacy!',
        lessons: [
            { name: 'Overview of the course content', url: `${header}/introduction/overview` },
            { name: 'Definition of financial literacy', url: `${header}/introduction/definition` },
            { name: 'Importance of financial literacy', url: `${header}/introduction/importance` },
        ],
    },
    {
        name: 'Budgeting',
        content: "Let's talk about budgets",
        lessons: [
            { name: 'Definition and importance of budgeting', url: `${header}/budgeting/definition` },
            { name: 'Creating a budget plan', url: `${header}/budgeting/plan` },
            { name: 'Tracking expenses and income', url: `${header}/budgeting/tracking` },
            { name: 'Adjusting the budget as needed', url: `${header}/budgeting/adjusting` },
            { name: 'Examples and case studies', url: `${header}/budgeting/examples` },
        ],
    },
    {
        name: 'Debt Management',
        content: 'Break free and take charge',
        lessons: [
            { name: 'Definition and types of debt', url: `${header}/debt/definition` },
            { name: 'Strategies for paying off debt', url: `${header}/debt/strategies` },
            { name: 'Managing credit cards and loans', url: `${header}/debt/managing` },
            { name: 'Debt consolidation and negotiation', url: `${header}/debt/consolidation` },
            { name: 'Examples and case studies', url: `${header}/debt/examples` },
        ],
    },
    {
        name: 'Savings and Investing',
        content: 'Grow your wealth, invest with confidence.',
        lessons: [
            { name: 'Definition and importance of saving and investing', url: `${header}/savings/definition` },
            { name: 'Types of savings and investment accounts', url: `${header}/savings/types` },
            { name: 'Setting financial goals', url: `${header}/savings/goals` },
            { name: 'Creating a savings and investment plan', url: `${header}/savings/plan` },
            { name: 'Risks and benefits of investing', url: `${header}/savings/risks` },
            { name: 'Examples and case studies', url: `${header}/savings/examples` },
        ],
    },
    {
        name: 'Credit Scores',
        content: 'More than just a number',
        lessons: [
            { name: 'Definition and importance of credit scores', url: `${header}/credit/definition` },
            { name: 'Factors that affect credit scores', url: `${header}/credit/factors` },
            { name: 'How to check and monitor your credit score', url: `${header}/credit/checking` },
            { name: 'Strategies for improving your credit score', url: `${header}/credit/improving` },
            { name: 'Examples and case studies', url: `${header}/credit/examples` },
        ],
    },
    {
        name: 'Insurance',
        content: 'Protect what matters most',
        lessons: [
            { name: 'Definition and types of insurance', url: `${header}/insurance/definition` },
            { name: 'Importance of insurance', url: `${header}/insurance/importance` },
            { name: 'How insurance works', url: `${header}/insurance/how-works` },
            { name: 'Choosing the right insurance coverage', url: `${header}/insurance/choosing-coverage` },
            { name: 'Examples and case studies', url: `${header}/insurance/examples` },
        ],
    },
    {
        name: 'Taxes',
        content: 'A necessary cost',
        lessons: [
            { name: 'Definition and types of taxes', url: `${header}/taxes/definition` },
            { name: 'Tax filing requirements and deadlines', url: `${header}/taxes/filing-requirements` },
            { name: 'Tax deductions and credits', url: `${header}/taxes/deductions-credits` },
            { name: 'Strategies for minimizing taxes', url: `${header}/taxes/minimizing-strategies` },
            { name: 'Examples and case studies', url: `${header}/taxes/examples` },
        ],
    },
    {
        name: 'Historical Context',
        content: 'Know the past, predict the future',
        lessons: [
            { name: 'Origins of financial literacy in ancient societies', url: `${header}/historical-context/origins` },
            { name: 'Development of coinage and currency', url: `${header}/historical-context/coinage-currency` },
            { name: 'Evolution of financial literacy in response to technological advancements and economic trends', url: `${header}/historical-context/evolution` },
        ],
    },
    {
        name: 'Conclusion',
        content: "Let's wrap it up",
        lessons: [
            { name: 'Summary of course content', url: `${header}/conclusion/summary` },
            { name: 'Importance of applying financial literacy skills in real-world situations', url: `${header}/conclusion/importance-skills` },
            { name: 'Additional resources for further learning', url: `${header}/conclusion/resources` },
        ],
    },
];

const IntroToFinancialLiteracyModule: FC = () => {
    const foregroundRef = useRef<HTMLDivElement>(null);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    useCalculateTotalHeight('.module-entry', activeDropdown);

    const handleScroll = () => {
        const foregroundScroll = foregroundRef.current?.scrollTop ?? 0;
        const parallaxElement = document.querySelector(".background-parallax") as HTMLElement;
        parallaxElement.style.transform = `translateY(-${foregroundScroll * .5}px)`;
    };

    useEffect(() => {
        foregroundRef.current?.addEventListener('scroll', handleScroll);
        return () => {
            foregroundRef.current?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="background-parallax background-height"></div>
            <div className="foreground" ref={foregroundRef}>
                <Navbar />
                <Chat />

                <h1>Introduction to Financial Literacy</h1>
                {modAndLessons.map((module, index) => (
                    <ModuleEntry
                        key={index}
                        header={module.name}
                        content={module.content}
                        subModules={module.lessons}
                        activeDropdown={activeDropdown ? activeDropdown.toString() : null}
                        setActiveDropdown={setActiveDropdown}
                    />

                ))}
            </div>
        </>
    );
};

export default IntroToFinancialLiteracyModule;