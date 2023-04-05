import ModuleEntry from '../templateModule.js'
import '../../universal-styles.css';
import React, { useState, useEffect, useRef } from 'react';


function IntroToFinancialLiteracyModule() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const backgroundRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (backgroundRef.current) {
                const scrollPos = window.pageYOffset;
                backgroundRef.current.style.transform = `translateY(-${scrollPos * 0.5}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className="background-parallax"></div>
            <div className="foreground">
                <ModuleEntry
                    header="Introduction"
                    content="Introducing Financial Literacy!"
                />
                <ModuleEntry
                    header="Budgeting"
                    content="Let's talk about budgets"
                />
                <ModuleEntry
                    header="Debt Management"
                    content="Break free and take charge"
                />
                <ModuleEntry
                    header="Saving and investing"
                    content="Grow your wealth, invest with confidence."
                />
                <ModuleEntry
                    header="Credit Scores"
                    content="More than just a number"
                />
                <ModuleEntry
                    header="Insurance"
                    content="Protect what matters"
                />
                <ModuleEntry
                    header="Taxes"
                    content="A necessary cost"
                />
                <ModuleEntry
                    header="Historical Context"
                    content="Know the past, predict the future"
                />
                <ModuleEntry
                    header="Conclusion"
                    content="Let's wrap it up"
                />
            </div>
        </>
    );
}

export default IntroToFinancialLiteracyModule;