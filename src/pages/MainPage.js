// MainPage.js
import React, { useContext, useEffect, useState } from 'react';
import { Container, Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import DashboardMenu from '../components/DashboardMenu';
import { AuthContext } from '../context/AuthContext';
import LoginModal from '../components/LoginModal';
//import ExamTable from '../components/ExamTable'

function MainPage() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedYear, setSelectedYear] = useState('2024');

  const historyData = [
    { year: '2024', date: '2024-10-15', examInfo: '2024년 9월 시험' },
    { year: '2023', date: '2023-09-25', examInfo: '2023년 8월 시험' },
    { year: '2023', date: '2023-06-15', examInfo: '2023년 5월 시험' },
    { year: '2022', date: '2022-12-11', examInfo: '2022년 11월 시험' },
  ];

   // 고유 연도 목록을 가져오기
  const years = [...new Set(historyData.map((item) => item.year))];

   // 선택한 연도에 해당하는 데이터 필터링
  const filteredData = historyData.filter((record) => record.year === selectedYear);

  useEffect(() => {
    if (isAuthenticated !== null) {
      setLoading(false);
      // 비로그인 상태일 때만 모달을 열도록 조건 추가
      if (isAuthenticated === false) {
        setIsModalOpen(true);
      } else {
        setIsModalOpen(false);
      }
    }
  }, [isAuthenticated]);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <TopNav />
        <Box sx={{ mt: 2, ml: 3 }}>
          <DashboardMenu />
        </Box>
        <Container maxWidth="md" sx={{ mt: 4, ml: 2 }}>
          <Box textAlign="center" mt={4}>
            {isAuthenticated ? (
              <>
                <Typography variant="h3" gutterBottom>
                  안녕하세요, {user?.userId || '사용자'}님!
                </Typography>
                <Typography variant="body1">
                  Memo에 오신 것을 환영합니다. 아래에서 새로운 메모를 작성하거나 기록을 관리해보세요!
                </Typography>

              </>
            ) : (
              <>
                <Typography variant="h3" gutterBottom>
                  환영합니다!
                </Typography>
                <Typography variant="body1">
                  Memo에 오신 것을 환영합니다. 로그인하거나 회원가입을 통해 더 많은 기능을 이용해보세요!
                </Typography>
              </>
            )}
          </Box>
          {/* <ExamTable /> */}

      {/* 연도 선택 카테고리 */}
      <Box className="yearCategories">
        {years.map((year) => (
          <Button 
            key={year} 
            onClick={() => setSelectedYear(year)}
            variant={selectedYear === year ? 'contained' : 'outlined'}
            style={{ marginRight: 8 }}
          >
            {year}년
          </Button>
        ))}
      </Box>

      {/* 테이블 컨테이너 */}
      <TableContainer component={Paper} className="examTable" >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>날짜</TableCell>
              <TableCell>시험 정보</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((record, index) => (
              <TableRow key={index}>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.examInfo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

        </Container>
        {/* 로그인 모달을 메인 페이지에서만 표시 */}
        {isAuthenticated === false && (
          <LoginModal isOpen={isModalOpen} onClose={handleModalClose} />
        )}
      </div>
    </div>

  );
}

export default MainPage;
