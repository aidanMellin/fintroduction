import './styles/homepage.css';
import './styles/universal-styles.css';
import IntroToFinancialLiteracyModule from "./pages/learning/IntroToFinancialLiteracy";
import Navbar from './navbar';
import Chat from './Chat/Chat';
import useCalculateTotalHeight, {showSection} from './universal-functions';
import React, { useState, useEffect, useRef, ReactElement, FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, RouteProps } from 'react-router-dom';
import LearningModules from './pages/learning_modules';
import FeaturesSection from './pages/features';

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
  useCalculateTotalHeight("section", null);
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

function BlogSection() {
  return (
    <section id="blog-section">
      <h2>Blog section</h2>
    </section>
  );
}

export default App;
