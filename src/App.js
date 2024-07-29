import React from "react";
import styled from "styled-components";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import MyCards from "./components/MyCards/MyCards";
import RecentTransactions from "./components/RecentTransactions/RecentTransactions";
import QuickTransfer from "./components/QuickTransfer/QuickTransfer";
import {
  BalanceHistoryChart,
  ExpenseStatisticsChart,
  WeeklyActivityChart,
} from "./components/Charts/Charts";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f5f7fa;
`;

const MainContent = styled.div`
  height: calc(100% - 5rem);
  width: calc(100% - 13rem);
  margin-top: 5rem;
  padding: 1rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Row = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
`;

// const LayoutContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 100%;
//   gap: 1rem;
// `;

// const Row = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 1rem;
//   height: 33%;
//   width: 100%;
// `;

// const CardContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 1rem;
//   box-sizing: border-box;
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
//   flex: ${(props) => props.flex || 1};
// `;

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <Navbar />
      <MainContent>
        <Row>
          <MyCards />
          <RecentTransactions />
        </Row>
        <Row>
          <WeeklyActivityChart />
          <ExpenseStatisticsChart />
        </Row>
        <Row>
          <QuickTransfer />
          <BalanceHistoryChart />
        </Row>
      </MainContent>
    </AppContainer>
  );
}

export default App;
