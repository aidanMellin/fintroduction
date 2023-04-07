import '../../universal-styles.css';
import useCalculateTotalHeight from '../../universal-functions';
import ModuleEntry from '../templateModule';
import React, { useState, useEffect, useRef, ReactElement, FC } from 'react';

type Lesson = {
  name: string;
  content: string;
};

type Module = {
  name: string;
  content: string;
  lessons: Lesson[];
};

const modAndLessons: Module[] = [
  {
    name: 'Introduction',
    content: 'Introducing Financial Literacy!',
    lessons: [
      'Overview of the course content',
      'Definition of financial literacy',
      'Importance of financial literacy',
    ],
  },
  {
    name: 'Budgeting',
    content: "Let's talk about budgets",
    lessons: [
      'Definition and importance of budgeting',
      'Creating a budget plan',
      'Tracking expenses and income',
      'Adjusting the budget as needed',
      'Examples and case studies',
    ],
  },
];

interface Props {
  modAndLessons: Module[];
}

const IntroToFinancialLiteracyModule: FC<Props> = ({ modAndLessons }) => {
  const foregroundRef = useRef<HTMLDivElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const totalHeight = useCalculateTotalHeight('.module-entry', activeDropdown);

  useEffect(() => {
    const handleScroll = () => {
      const foregroundScroll = foregroundRef.current?.scrollTop ?? 0;
      const parallaxElement = document.querySelector('.background-parallax') as HTMLElement;
      parallaxElement.style.transform = `translateY(-${foregroundScroll * 0.5}px)`;
    };
    foregroundRef.current?.addEventListener('scroll', handleScroll);
    return () => {
      foregroundRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="background-parallax background-height"></div>
      <div className="foreground" ref={foregroundRef}>
        <h1>Introduction to Financial Literacy</h1>
        {modAndLessons.map((module, index) => (
          <ModuleEntry
            key={index}
            header={module.name}
            content={module.content}
            subModules={module.lessons.map((lesson) => ({
              name: lesson,
              content: '',
            }))}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
        ))}
      </div>
    </>
  );
};

export default IntroToFinancialLiteracyModule;



export default IntroToFinancialLiteracyModule;