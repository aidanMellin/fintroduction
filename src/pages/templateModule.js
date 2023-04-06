import React from "react";
import './module.css';

function ModuleEntry({ header, content }) {
    return (
        <div className="module-entry">
            <div className="module-peek">
                <h3>{header}</h3>
                <p>{content}</p>
                <button>Learn more</button>
            </div>
        </div>
    );
}

export default ModuleEntry;