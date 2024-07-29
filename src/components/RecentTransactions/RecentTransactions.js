import React from 'react';
import styled from 'styled-components';

const RecentTransactionsContainer = styled.div`
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  flex: 1;
`;

const SectionTitle = styled.h2`
  color: #343c6a;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TransactionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TransactionItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e0e0e0;
`;

const TransactionInfo = styled.div`
  display: flex;
  align-items: center;
`;

const TransactionIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

const TransactionDescription = styled.div`
  color: #343c6a;
  font-size: 1rem;
`;

const TransactionDate = styled.span`
  color: #b0b7c3;
  font-size: 0.875rem;
`;

const TransactionAmount = styled.span`
  color: ${({ isPositive }) => (isPositive ? '#4caf50' : '#f44336')};
  font-size: 1rem;
  font-weight: bold;
`;

const transactions = [
  { icon: '📄', bgColor: '#FFF6E3', description: 'Deposit from my Card', date: '28 January 2021', amount: -850 },
  { icon: '📱', bgColor: '#E6F6FF', description: 'Deposit Paypal', date: '25 January 2021', amount: 2500 },
  { icon: '👤', bgColor: '#E6FFF3', description: 'Jemi Wilson', date: '21 January 2021', amount: 5400 },
];

const RecentTransactions = () => {
  return (
    <RecentTransactionsContainer>
      <SectionTitle>Recent Transaction</SectionTitle>
      <TransactionList>
        {transactions.map((transaction, index) => (
          <TransactionItem key={index}>
            <TransactionInfo>
              <TransactionIcon bgColor={transaction.bgColor}>{transaction.icon}</TransactionIcon>
              <TransactionDescription>
                {transaction.description}
                <br />
                <TransactionDate>{transaction.date}</TransactionDate>
              </TransactionDescription>
            </TransactionInfo>
            <TransactionAmount isPositive={transaction.amount > 0}>
              {transaction.amount > 0 ? '+' : '-'}${Math.abs(transaction.amount)}
            </TransactionAmount>
          </TransactionItem>
        ))}
      </TransactionList>
    </RecentTransactionsContainer>
  );
};

export default RecentTransactions;