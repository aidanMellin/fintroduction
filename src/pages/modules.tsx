import React, { FC, useState, useEffect, useRef } from 'react';
import '../styles/module.css';
import { Link } from 'react-router-dom';

export type ModuleLesson = {
  name: string;
  url: string;
};


interface Props {
  header: string;
  content: string;
  subModules: ModuleLesson[];
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
            <h4>{subMod.name}</h4>
            <Link to={subMod.url}><button>Start Lesson</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

interface CourseModuleProps {
  title: string;
  tlDr: string;
  content: string;
  prevModule: () => void;
  nextModule: () => void;
}

const CourseModule: React.FC<CourseModuleProps> = ({
  title,
  tlDr,
  content,
  prevModule,
  nextModule,
}) => {
  return (
    <div className="course-module">
      <h1>{title}</h1>
      <h2>TL;DR:</h2>
      <p>{tlDr}</p>
      <h2>Body:</h2>
      <p>{content}</p>
      <div className="module-navigation">
        <button onClick={prevModule}>Previous Module</button>
        <button onClick={nextModule}>Next Module</button>
      </div>
    </div>
  );
};

export default ModuleEntry;
