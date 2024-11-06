//분석 or 피드백 화면

import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar'; // Sidebar 컴포넌트 임포트
import TopNav from '../components/TopNav';
import AnalysisBox from '../components/Analysis_Box';
import './CSS/AnalysisPage.css';

function Analysis() {
  return (
    <div className="analysis-container">
      {/* 사이드바 */}
      <Sidebar />

      <div className="content-wrapper">
        {/* 상단 네비게이션 바 */}
        <TopNav />

        <div className="content-area">
          {/* 컨텐츠 영역 */}
          <Box className="analysis-main-box">

            {/* 시험 문제 영역을 두 개의 박스로 나누기 */}
            <AnalysisBox customClass="custom-analysis-style" />
            
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
