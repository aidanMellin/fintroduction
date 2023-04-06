import React, { useState, useEffect, useRef } from 'react';
import './module.css';

function ModuleEntry({ header, content, subModules }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        setDropdownOpen(false);
    }, []);

    const handleDropdownClick = () => {
        setDropdownOpen((prevState) => !prevState);
    };

    return (
        <div className="module-entry">
            <div className="module-peek">
                <h3>{header}</h3>
                <p>{content}</p>
                <button onClick={handleDropdownClick}>Learn more</button>
            </div>
            <div className={`dropdown ${dropdownOpen ? 'open' : 'closed'}`}>
                {subModules.map((subMod, index) => (
                    <div className="subModule" key={`submodule-${index}`}>
                        <h4>{subMod}</h4>
                    <button>Start Lesson</button>

                    </div>
                ))}
            </div>
        </div>
    );
}


export default ModuleEntry;