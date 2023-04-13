// ContentComponent.tsx

import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { Lesson } from './lessons_data'; // Import the Lesson type from the appropriate file

const ContentComponent = ({ lesson }: { lesson: Lesson }) => {
  const content = lesson.content[0];

  return (
    <Container>
      <Typography variant="h3" component="h1" align="center" sx={{ mt: 12 }}>
        {lesson.title}
      </Typography>
      <Box borderBottom={1} my={2} />
      <Typography variant="h5" component="h2" gutterBottom>
        {content.hook}
      </Typography>
      <Box borderBottom={1} my={2} />
      <Typography variant="body1" component="p" gutterBottom>
        {content.writeup}
      </Typography>
      <Box borderBottom={1} my={2} />
    </Container>
  );
};

export default ContentComponent;
