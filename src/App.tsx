import './homepage.css';
import './universal-styles.css';
import IntroToFinancialLiteracyModule from "./pages/IntroToFinancialLiteracy/IntroToFinancialLiteracy";
import Navbar from './navbar';
import Chat from './Chat/Chat';
import useCalculateTotalHeight from './universal-functions';
import React, { useState, useEffect, useRef, ReactElement, FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, RouteProps } from 'react-router-dom';

const App: FC = (): ReactElement => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/fintroduction' element={<LandingPage />} />
        <Route path='/intro_to_financial_literacy_module' element={<IntroToFinancialLiteracyModule />} />
        <Route path='/about' element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

function LandingPage() {
  const totalHeight = useCalculateTotalHeight("section", null);
  const foregroundRef = useRef<HTMLDivElement>(null);

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
        <HeroSection />
        <FeaturesSection />
        <BlogSection />
        <LearningModules />
        <Chat />
      </div>
    </>
  );
}

/**
 * Hero section component that displays the main heading and a "Get Started" button.
 * 
 * @returns JSX element
 */
function HeroSection(): JSX.Element {
  return (
    <section id="hero">
      <div className="hero-content">
        <h2>Start learning about finance today</h2>
        <button onClick={() => showSection('features')}>Get Started Now</button>
      </div>
    </section>
  );
}

/**
 * Features section component that displays two feature items with buttons.
 * 
 * @returns JSX element
 */
function FeaturesSection(): JSX.Element {
  return (
    <section id="features">
      <AddFeature
        head="Blog"
        content="Financial News, Tips, and Tricks!"
        buttonContent="Our Blog"
        showSectionVar={"blog-section"}
      />
      <AddFeature
        head="Learning Modules"
        content="Choose from a variety of specific learning modules."
        buttonContent="Explore Modules"
        showSectionVar={"learning-modules"} />
    </section>
  );
}

interface Props {
  head: string;
  content: string;
  showSectionVar: string;
  buttonContent: string;
}

function AddFeature({ head, content, showSectionVar, buttonContent }: Props) {
  return (
    <div className='feature'>
      <h3>{head}</h3>
      <p>{content}</p>
      <button onClick={() => showSection(showSectionVar)}>{buttonContent}</button>
    </div>
  );
}

type Module = {
  head: string;
  content: string;
  moduleLink: string;
  dataStatus: "active" | "unknown" | "inactive";
  dataIndex: string;
}

const modules: Module[] = [
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
          dataStatus={currentModule.dataStatus}
          dataIndex={currentModule.dataIndex}
        />
      </div>
      <ModuleButtons handleModuleButtonClicked={handleModuleButtonClicked} />
    </section>
  );
}

type AddModuleProps = {
  dataStatus: string;
  dataIndex: string;
  head: string;
  content: string;
  moduleLink: string;
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
  dataStatus,
  dataIndex,
  head,
  content,
  moduleLink,
}: AddModuleProps) {
  const [isActive, setIsActive] = useState(false);
  const [width] = useState(window.innerWidth);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className="module"
      data-status={dataStatus}
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

function BlogSection() {
  return (
    <section id="blog-section">
      <h2>Blog section</h2>
    </section>
  );
}

function showSection(id: string) {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
}

export default App;
