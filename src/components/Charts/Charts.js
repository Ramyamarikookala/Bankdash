// Charts.js
import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import styled from 'styled-components';

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
} from 'chart.js';

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

const ChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

export const WeeklyActivityChart = () => {
  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Deposit',
        data: [400, 200, 300, 500, 250, 400, 300],
        backgroundColor: '#1814F3',
      },
      {
        label: 'Withdraw',
        data: [200, 300, 100, 400, 350, 200, 100],
        backgroundColor: '#16DBCC',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Activity',
      },
    },
  };

  return (
    <ChartContainer>
      <Bar data={data} options={options} height={200} />
    </ChartContainer>
  );
};

export const ExpenseStatisticsChart = () => {
  const data = {
    labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
    datasets: [
      {
        label: 'Expenses',
        data: [30, 15, 20, 35],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Expense Statistics',
      },
    },
  };

  return (
    <ChartContainer>
      <Pie data={data} options={options} height={200} />
    </ChartContainer>
  );
};

export const BalanceHistoryChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Balance',
        data: [2000, 2200, 2100, 2500, 2400, 2800, 3000],
        borderColor: '#4bc0c0',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Balance History',
      },
    },
  };

  return (
    <ChartContainer>
      <Line data={data} options={options} height={200} />
    </ChartContainer>
  );
};
