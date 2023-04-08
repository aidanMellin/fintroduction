import React, { useState, useEffect, useRef, ReactElement, FC } from 'react';
import {showSection} from '../universal-functions'

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

export default FeaturesSection;