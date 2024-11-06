// ProblemsPage.js
import React, { useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import ProblemCard from '../components/Problem_Card';
import ProblemBox from '../components/Problem_Box';
import './CSS/QuestionsPage.css';

function ProblemsPage() {
  const sliderRef = useRef(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="problems-container">
      <Sidebar />

      <div className="content-wrapper">
        <TopNav />

        <div className="content-area">
          <ProblemCard ref={sliderRef} />

          <Box className="problem-main-box">
            <Box className="small-box">
              <Typography variant="h6" className="left-text">시험</Typography>
              <Typography variant="h6" className="center-text">학습 시간:</Typography>

              <Box className="button-box">
                <Button className="nav-button" onClick={handlePrev}>
                  <ArrowBackIcon />
                </Button>
                <Button className="nav-button" onClick={handleNext}>
                  <ArrowForwardIcon />
                </Button>
              </Box>
            </Box>

            <ProblemBox customClass="custom-problem-style" />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default ProblemsPage;
