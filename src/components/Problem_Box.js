import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import './CSS/Problem_Box.css'; // 전역 CSS 임포트

const Problem_Box = ({ customClass }) => {
  return (
    <Box className={`problemArea ${customClass}`}>
      {/* 첫 번째 박스 */}
      <Box className="problemBox">
        <Typography variant="body1" className="problemText">시험 문제</Typography>
        <Box className="answer-box">
          <TextField
            variant="outlined"
            placeholder="답을 입력하세요"
            size="small"
            className="answer-input"
          />
        </Box>
      </Box>

      {/* 두 번째 박스 */}
      <Box className="explanationBox">
        <Typography variant="body1"></Typography>
      </Box>
    </Box>
  );
};

export default Problem_Box;
