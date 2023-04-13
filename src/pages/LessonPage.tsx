import React from 'react';
import { Box } from '@mui/material';
import ContentComponent from './ContentComponent';
import QuizComponent from './QuizComponent';
import { Lesson } from './lessons_data';

const LessonPage = ({ lesson }: { lesson: Lesson }) => {
    const content = lesson.content[0];

    return (
        <Box>
            <ContentComponent lesson={lesson} />
            <QuizComponent quiz={content.quiz} />
        </Box>
    );
};

export default LessonPage;
