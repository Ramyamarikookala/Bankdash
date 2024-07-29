// Charts.js
import React from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import styled from "styled-components";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const MasterContainerBar = styled.div`
  flex: 3;
  height: fit-content;
`;

const SectionTitle = styled.h2`
  color: #343c6a;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  padding-bottom: 1rem;
`;

const LabelCont = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Circle = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 0.5rem;
  margin-right: 0.25rem;
  background-color: ${(props) => props.bgColor};
`;

const Label = styled.span`
  font-size: 0.8125rem;
  color: #718ebf;
  margin-right: 1rem;
`;

const ChartContainerBar = styled.div`
  height: 20rem;
  width: 100%;
  background-color: #ffffff;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 25px;
`;

const ChartContainerPie = styled.div`
  height: 20rem;
  flex: 2;
  background-color: #ffffff;
  padding: 1rem;
`;

export const WeeklyActivityChart = () => {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Deposit",
        data: [400, 200, 300, 500, 250, 400, 300],
        backgroundColor: "#1814F3",
        borderRadius: 20,
        barThickness: 10,
        borderWidht: 1,
      },
      {
        label: "Withdraw",
        data: [200, 300, 100, 400, 350, 200, 100],
        backgroundColor: "#16DBCC",
        borderRadius: 20,
        barThickness: 10,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        barPercentage: 0.5, // Adjust bar width relative to category
        categoryPercentage: 0.8, //
        grid: {
          display: false,
        },
      },
      y: {
        categoryPercentage: 1.0, // Space between groups of bars
        ticks: {
          stepSize: 100,
        },
      },
    },
  };

  const label = [
    { color: "#1814F3", name: "Diposit" },
    { color: "#16DBCC", name: "Withdraw" },
  ];

  return (
    <MasterContainerBar>
      <SectionTitle>Weekly Activity</SectionTitle>
      <ChartContainerBar>
        <LabelCont>
          {label.map((item, i) => (
            <>
              <Circle bgColor={item.color} />
              <Label>{item.name}</Label>
            </>
          ))}
        </LabelCont>
        <Bar data={data} options={options} maxWidth={400} />
      </ChartContainerBar>
    </MasterContainerBar>
  );
};

export const ExpenseStatisticsChart = () => {
  const data = {
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
    datasets: [
      {
        label: "Expenses",
        data: [30, 15, 20, 35],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Expense Statistics",
      },
    },
  };

  return (
    <ChartContainerPie>
      <Pie data={data} options={options} height={200} />
    </ChartContainerPie>
  );
};

export const BalanceHistoryChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Balance",
        data: [2000, 2200, 2100, 2500, 2400, 2800, 3000],
        borderColor: "#1814F3",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true, // Enables the area under the line to be filled
        tension: 0.4, // Adjusts the curve of the line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Balance History",
      },
    },
  };

  return (
    <ChartContainerPie>
      <Line data={data} options={options} height={200} />
    </ChartContainerPie>
  );
};
