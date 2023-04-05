import './styles.css';
import IntroToFinancialLiteracyModule from './pages/IntroToFinancialLiteracy/IntroToFinancialLiteracy.js'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/fintroduction' element={<LandingPage />} />
        <Route path='/intro_to_financial_literacy_module' element={<IntroToFinancialLiteracyModule />} />
      </Routes>
    </Router>
  );
}

function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <LearningModules />
    </>
  );
}

function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-content">
        <h2>Start learning about finance today</h2>
        <button onClick={() => showSection('features')}>Get Started Now</button>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features">
      <AddFeature
        head="Blog"
        content="Financial News, Tips, and Tricks!"
        buttonContent="Our Blog"
        showSectionVar={"blog"}
      />
      <AddFeature
        head="Learning Modules"
        content="Choose from a variety of specific learning modules."
        buttonContent="Explore Modules"
        showSectionVar={"learning-modules"} />
    </section>
  );
}

function AddFeature({ head, content, showSectionVar, buttonContent }) {

  return (
    <div className='feature'>
      <h3>{head}</h3>
      <p>{content}</p>
      <button onClick={() => showSection(showSectionVar)}>{buttonContent}</button>
    </div>
  );
}

const modules = [
  {
    head: "Introduction to Financial Literacy",
    content: "In this introductory course, learn the fundamental concepts of financial literacy. This includes budgeting, debt management, saving and investing, credit scores, insurance, and taxes",
    moduleLink: "/intro_to_financial_literacy_module",
    dataStatus: "active",
    dataIndex: "0"
  },
  {
    head: "Personal Finance",
    content: "Delve deeper into the topics covered in the introductory course focusing on developing a comprehensive financial plan. This course will cover retirement planning, investment strategies, and estate planning",
    moduleLink: "/personal_finance_module",
    dataStatus: "unknown",
    dataIndex: "1"
  },
  {
    head: "Financial Analysis",
    content: "Learn how to analyze financial statements and make informed decisions about investments and financial management. The course will cover financial ratios, cash flow analysis, and risk assessment",
    moduleLink: "/financial_analysis_module",
    dataStatus: "unknown",
    dataIndex: "2"
  },
  {
    head: "Investment Management",
    content: "Learn how to design and manage investment portfolios, focusing on maximizing returns and managing risk. This course will cover asset allocation, diversification, and portfolio optimization",
    moduleLink: "/investment_management_module",
    dataStatus: "unknown",
    dataIndex: "3"
  },
  {
    head: "Corporate Finance",
    content: "Learn how to analyze the financial performance of corporations, with a focus on capital budgeting, financial planning, and risk management. This course will cover financial statement analysis, capital structure, and corporate valuation",
    moduleLink: "/corporate_finance_module",
    dataStatus: "unknown",
    dataIndex: "4"
  },
  {
    head: "Financial Markets and Institutions",
    content: "Learn about the structure and function of financial markets and institutions, such as the role of banks, securities markets, and regulatory bodies. This course will cover market efficiency, portfolio management, and financial regulation",
    moduleLink: "financial_markets_and_institutions_module.html",
    dataStatus: "unknown",
    dataIndex: "5"
  }
];

var modIndex = 0;

function LearningModules() {
  const [currentModule, setCurrentModule] = useState(modules[modIndex]);

  const handleModuleButtonClicked = (indexProgress) => {
    const nextIndex = (modIndex + indexProgress + modules.length) % modules.length;
    setCurrentModule(modules[nextIndex]);
    modIndex = nextIndex;
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
          dataStatus={currentModule.dataStatus}
          dataIndex={currentModule.dataIndex}
        />
      </div>
      <ModuleButtons handleModuleButtonClicked={handleModuleButtonClicked} />
    </section>
  );
}

function AddModule({ dataStatus, dataIndex, head, content, moduleLink }) {
  const [isActive, setIsActive] = useState(false);
  const [moduleContent, setModuleContent] = useState(content);

  useEffect(() => {
    setModuleContent(content);
  }, [content]);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="module" data-status={dataStatus} data-index={dataIndex}>
      <h3 className={`dropdown-trigger ${isActive ? 'active' : ''}`} onClick={toggleDropdown}>
        {head}
      </h3>
      <p className={`module-content ${isActive ? 'active' : ''}`}>{moduleContent}</p>
      <Link to={moduleLink}>
        <button>
          Start Module
        </button>
      </Link>
    </div>
  );
}

function ModuleButtons({ handleModuleButtonClicked }) {
  return (
    <div className="module-buttons">
      <button id="left-button" onClick={() => handleModuleButtonClicked(-1)}>
        <i className="fa-solid fa-x"></i>
      </button>
      <button id="right-button" onClick={() => handleModuleButtonClicked(1)}>
        <i className="fa-solid fa-heart"></i>
      </button>
    </div>
  );
}

// let activeIndex = 0;
// const modLength = modules.length;

// function handleModuleButtonClicked(indexProgress) {
//   /**
//    * Handle the left and right button clicks for cycling through modules
//    */
//   const nextIndex = (activeIndex + indexProgress) % modLength;
//   console.log(`indexProgress ${indexProgress}\nactiveIndex ${activeIndex}\n `)
//   const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
//     nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

//   if (indexProgress < 0) { // Cycle left
//     currentGroup.dataset.status = "after";
//     nextGroup.dataset.status = "becoming-active-from-before";
//   } else { // Cycle right
//     currentGroup.dataset.status = "before";
//     nextGroup.dataset.status = "becoming-active-from-after";
//   }

//   console.log(nextIndex); // I think its because its not actually impacting the variable outside the program... lol duh.
//   console.log(module[nextIndex]);
//   module = modules[nextIndex];
//   modIndex = nextIndex;

//   setTimeout(() => {
//     // nextGroup.dataset.status = "active";
//   });
//   activeIndex = nextIndex;
// }

function showSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}

export default App;