import React, { FC, useState, useEffect, useRef } from 'react';
import '../styles/module.css';

interface Props {
  header: string;
  content: string;
  subModules: string[];
  activeDropdown: string | null;
  setActiveDropdown: React.Dispatch<React.SetStateAction<string | null>>;
}

const ModuleEntry: FC<Props> = ({
  header,
  content,
  subModules,
  activeDropdown,
  setActiveDropdown,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    if (dropdownOpen) {
      // If dropdown is already open, close it
      setDropdownOpen(false);
      setActiveDropdown(null);
    } else {
      // If dropdown is closed, open it and close any other open dropdowns
      setActiveDropdown(header);
      setDropdownOpen(true);
    }
  };

  useEffect(() => {
    if (header !== activeDropdown) {
      setDropdownOpen(false);
    }
  }, [activeDropdown, header]);

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
};

export default ModuleEntry;
