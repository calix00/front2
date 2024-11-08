import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import './Problem_Box.css';

const ProblemBox = ({ customClass, questionData, showExplanation = false, onAnswerChange, initialAnswer = '', isLastQuestion, onComplete, time }) => {
  const [answer, setAnswer] = useState(initialAnswer);

  useEffect(() => {
    setAnswer(initialAnswer); // 문제 변경 시 답 초기화
  }, [initialAnswer]);

  const handleInputChange = (event) => {
    const newAnswer = event.target.value;
    setAnswer(newAnswer);
    onAnswerChange(newAnswer);
  };

  if (!questionData) {
    return <Typography>No question data available</Typography>;
  }

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <Box className={`problemArea ${customClass}`}>
      <Box className="problemBox">
        <img
          src={questionData.text}
          alt="문제 이미지"
          className="questionImage"
        />
        
        {!showExplanation && (
          <Box mt={2} display="flex" alignItems="center" justifyContent="center">
            <TextField
              variant="outlined"
              placeholder="답을 입력하세요"
              size="small"
              className="answer-input"
              value={answer}
              onChange={handleInputChange}
            />
            {isLastQuestion && (
              <Button 
                variant="contained" 
                className="complete-button" 
                onClick={() => {
                  onComplete(); 
                  handleStop();
                }} 
                size="small" 
              >
                완료
              </Button>
            )}
          </Box>
        )}
      </Box>

      {showExplanation && (
        <Box className="explanationBox">
          <Typography variant="body2">설명: {questionData.explanation}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProblemBox;
