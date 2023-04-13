// src/components/LessonContent.tsx
import React, { useState } from 'react';
import Lessons, { Lesson } from './lessons_data'; // Assuming your data is in a separate file called "data.ts"
import '../styles/lessons.css';
import '../styles/lesson_tabs.css'
import { Link } from 'react-router-dom';

interface LessonContentProps {
    lessons: Lesson[];
}

export const LessonContent: React.FC<LessonContentProps> = ({ lessons }) => {
    return (
        <div className="lessons-layout" id="learning-modules">
            {lessons.map((lesson, index) => (
                <div key={index} className="lesson">
                    <div className="lesson-title">{lesson.title}</div>
                    <div className="lesson-content">
                        <div className="precedence-1-wrapper">
                            <img src={lesson.imageLink} alt={lesson.imageCredit} className="lesson-image" />
                            <Link to={"/fintroduction/test"}>
                                <div className="article article-1">
                                    <h2 className="article-title">{lesson.content.find((article) => article.precedence === 1)?.title}</h2>
                                    <p className="quick-info">{lesson.content.find((article) => article.precedence === 1)?.quickInfo}</p>
                                </div>
                            </Link>
                        </div>
                        <div className="articles-wrapper">
                            {[2, 3].map((precedence) => {
                                const article = lesson.content.find((article) => article.precedence === precedence);
                                return (
                                    article && (
                                        <div key={precedence} className={`article article-${precedence}`}>
                                            <h3 className="article-title">{article.title}</h3>
                                            <p className="quick-info">{article.quickInfo}</p>
                                        </div>
                                    )
                                );
                            })}
                            <Link to={"/fintroduction/intro_to_financial_literacy_module/home"} className='see-more'>
                                See More
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const LessonTabs = () => {
    const [activeLesson, setActiveLesson] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveLesson(index);
    };

    return (
        <div className="lesson-tabs-container">
            <div className="tabs">
                {Lessons.map((lesson, index) => (
                    <div
                        key={index}
                        className={`tab ${index === activeLesson ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {lesson.title}
                    </div>
                ))}
            </div>
            <LessonContent lessons={[Lessons[activeLesson]]} />
        </div>
    );
};

export default LessonTabs;