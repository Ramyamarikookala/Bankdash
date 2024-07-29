import React from 'react';
import styled from 'styled-components';

import transfer from '../../assets/17-transfer.png';
import creditcard from '../../assets/credit-card 1.png';
import econo1 from '../../assets/econometrics 1.png';
import econoinv from '../../assets/economic-investment 1.png';
import home from '../../assets/home 2.png';
import loan from '../../assets/loan 1.png';
import serv from '../../assets/service 1.png';
import setti from '../../assets/settings 1.png';
import icon from '../../assets/iconfinder.png';

const menuItems = [
  { icon: home, text: 'Dashboard' },
  { icon: transfer, text: 'Transactions' },
  { icon: econoinv, text: 'Accounts' },
  { icon: econoinv, text: 'Investments' },
  { icon: creditcard, text: 'Credit Cards' },
  { icon: loan, text: 'Loans' },
  { icon: serv, text: 'Services' },
  { icon: econo1, text: 'My Privileges' },
  { icon: setti, text: 'Setting' },
];

const SidebarContainer = styled.div`
  width: 10rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  border-right: 1px solid #e0e0e0;
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const LogoImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const LogoText = styled.span`
  color: #343C6A;
  font-size: 1.25rem;
  font-weight: 700;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;

  &:hover {
    background-color: #f0f0f0;
  }

  ${(props) =>
    props.active &&
    `
    background-color: #e0e7ff;
    color: #0057ff;
    font-weight: 600;
  `}
`;

const MenuIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

const MenuText = styled.span`
  font-size: 0.875rem;
  color: #5A6474;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <LogoImage src={icon} alt="BankDash Logo" />
        <LogoText>BankDash.</LogoText>
      </LogoContainer>

      {menuItems.map((item, index) => (
        <MenuItem key={index} active={item.text === 'Dashboard'}>
          <MenuIcon src={item.icon} alt={item.text} />
          <MenuText>{item.text}</MenuText>
        </MenuItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;