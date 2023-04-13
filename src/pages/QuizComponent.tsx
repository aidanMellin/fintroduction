import React, { useState } from 'react';
import { Typography, Box, Button, Container } from '@mui/material';
import { Quiz } from './lessons_data';

const QuizComponent = ({ quiz }: { quiz: Quiz }) => {
    const [selected, setSelected] = React.useState<number | null>(null);
    const [correct, setCorrect] = React.useState(false);
    const [incorrect, setIncorrect] = React.useState(false);

    const handleOptionClick = (index: number) => {
        if (correct) return;
        setIncorrect(false);
        setSelected(index);
    };

    const handleSubmit = () => {
        if (selected === null) return;
        if (selected === quiz.correctAnswerIndex[0]) {
            setCorrect(true);
        } else {
            setIncorrect(true);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "66vw",
                p: 4,
                border: "1px solid",
                borderColor: theme => theme.palette.divider,
                borderRadius: 1,
                mt: 2,
                margin: "auto"
            }}
        >
            <Typography variant="h6" component="h3" align="center" gutterBottom>
                {quiz.question[0]}
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
                {quiz.options[0].map((option, index) => (
                    <Button
                        key={index}
                        variant="outlined"
                        onClick={() => handleOptionClick(index)}
                        color={
                            selected === index
                                ? correct
                                    ? "success"
                                    : incorrect
                                        ? "error"
                                        : "inherit"
                                : "inherit"
                        }
                        sx={{
                            width: "33vw",
                            mb: 1,
                            "&:hover": {
                                backgroundColor: theme =>
                                    selected === index
                                        ? theme.palette.action.hover
                                        : theme.palette.action.hover,
                            },
                            backgroundColor: theme =>
                                selected === index
                                    ? theme.palette.action.selected
                                    : "inherit",
                            borderColor: theme =>
                                selected === index
                                    ? theme.palette.primary.main
                                    : "inherit",
                        }}
                    >
                        {option}
                    </Button>
                ))}
            </Box>
            <Button onClick={handleSubmit} sx={{ mt: 2 }}>
                Submit
            </Button>
        </Box>
    );
};


export default QuizComponent;
