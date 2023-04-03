import './styles.css';
import React, {useState} from 'react';

function App() {
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
      <div class="hero-content">
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
    <div class='feature'>
      <h3>{head}</h3>
      <p>{content}</p>
      <button onClick={() => showSection(showSectionVar)}>{buttonContent}</button>
    </div>
  );
}

function LearningModules() {
  return (
    <section id="learning-modules">
      <h2>Choose a Learning Module</h2>
      <AddModule
        head="Introduction to Financial Literacy"
        content="In this introductory course, learn the fundamental concepts of financial literacy. This includes
        budgeting, debt management, saving and investing, credit scores, insurance, and taxes"
        htmlLink="into_to_financial_liteacy_module.html"
        dataStatus="active"
        dataIndex="0"
      />
      <AddModule
        head="Personal Finance"
        content="Delve deeper into the topics covered in the introductory course focusing on developing a
        comprehensive financial plan. This course will cover retirement planning, investment strategies, and estate
        planning"
        htmlLink="personal_finance_module.html"
        dataStatus="unknown"
        dataIndex="1"
      />
      <AddModule
        head="Financial Analysis"
        content="Learn how to analyze financial statements and make informed decisions about investments and financial
        management. The course will cover financial ratios, cash flow analysis, and risk assessment"
        htmlLink="financial_analysis_module.html"
        dataStatus="unknown"
        dataIndex="2"
      />
      <AddModule
        head="Investment Management"
        content="Learn how to design and manage investment portfolios, focusing on maximizing returns and managing risk. This course will cover asset allocation, diversification, and portfolio optimization"
        htmlLink="investment_management_module.html"
        dataStatus="unknown"
        dataIndex="3"
      />
      <AddModule
        head="Corporate Finance"
        content="Learn how to analyze the financial performance of corporations, with a focus on capital budgeting, financial planning, and risk management. This course will cover financial statement analysis, capital structure, and corporate valuation"
        htmlLink="corporate_finance_module.html"
        dataStatus="unknown"
        dataIndex="4"
      />
      <AddModule
        head="Financial Markets and Institutions"
        content="Learn about the structure and function of financial markets and institutions, such as the role of
        banks, securities markets, and regulatory bodies. This course will cover market efficiency, portfolio management, and financial regulation"
        htmlLink="financial_markets_and_institutions_module.html"
        dataStatus="unknown"
        dataIndex="5"
      />
      < ModuleButtons />
    </section>
  );
}

function AddModule({ dataStatus, dataIndex, head, content, htmlLink }) {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="module" data-status={dataStatus} data-index={dataIndex}>
      <h3 className={`dropdown-trigger ${isActive ? 'active' : ''}`} onClick={toggleDropdown}>
        {head}
      </h3>
      <p className={`module-content ${isActive ? 'active' : ''}`}>{content}</p>
      <button>
        <a href={htmlLink}>Start module</a>
      </button>
    </div>
  );
}

function ModuleButtons() {
  return (
    <div class="module-buttons">
      <button id="left-button" onClick={() => handleModuleButtonClicked(-1)}>
        <i class="fa-solid fa-x"></i>
      </button>
      <button id="right-button" onClick={() => handleModuleButtonClicked(1)}>
        <i class="fa-solid fa-heart"></i>
      </button>
    </div>
  );
}

let activeIndex = 0;
const groups = document.getElementsByClassName("module");

function handleModuleButtonClicked(indexProgress) {
  /**
   * Handle the left and right button clicks for cycling through modules
   */
  const nextIndex = (activeIndex + indexProgress) % groups.length;
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  if (indexProgress < 0) { // Cycle left
    currentGroup.dataset.status = "after";
    nextGroup.dataset.status = "becoming-active-from-before";
  } else { // Cycle right
    currentGroup.dataset.status = "before";
    nextGroup.dataset.status = "becoming-active-from-after";
  }

  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

function showSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}



export default App;
