import React from 'react';
import styled from 'styled-components';

import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import MyCards from './components/MyCards/MyCards';
import RecentTransactions from './components/RecentTransactions/RecentTransactions';
import QuickTransfer from './components/QuickTransfer/QuickTransfer';
import { BalanceHistoryChart, ExpenseStatisticsChart, WeeklyActivityChart } from './components/Charts/Charts';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f5f7fa;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow: hidden;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 1rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 1rem;
  height: calc(33.33% - 0.67rem); 
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  flex: ${props => props.flex || 1};
`;

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <MainContent>
          <LayoutContainer>
            <Row>
              <CardContainer flex="73">
                <MyCards />
              </CardContainer>
              <CardContainer flex="27">
                <RecentTransactions />
              </CardContainer>
            </Row>
            <Row>
              <CardContainer flex="73">
                <WeeklyActivityChart />
              </CardContainer>
              <CardContainer flex="27">
                <ExpenseStatisticsChart />
              </CardContainer>
            </Row>
            <Row>
              <CardContainer flex="40">
                <QuickTransfer />
              </CardContainer>
              <CardContainer flex="60">
                <BalanceHistoryChart />
              </CardContainer>
            </Row>
          </LayoutContainer>
        </MainContent>
      </div>
    </AppContainer>
  );
}

export default App;