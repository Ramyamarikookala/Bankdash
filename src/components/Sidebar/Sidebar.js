import React from "react";
import styled from "styled-components";

import transfer from "../../assets/17-transfer.png";
import creditcard from "../../assets/credit-card 1.png";
import econo1 from "../../assets/econometrics 1.png";
import econoinv from "../../assets/economic-investment 1.png";
import home from "../../assets/home 2.png";
import loan from "../../assets/loan 1.png";
import serv from "../../assets/service 1.png";
import setti from "../../assets/settings 1.png";
import icon from "../../assets/iconfinder.png";

const menuItems = [
  { icon: home, text: "Dashboard" },
  { icon: transfer, text: "Transactions" },
  { icon: econoinv, text: "Accounts" },
  { icon: econoinv, text: "Investments" },
  { icon: creditcard, text: "Credit Cards" },
  { icon: loan, text: "Loans" },
  { icon: serv, text: "Services" },
  { icon: econo1, text: "My Privileges" },
  { icon: setti, text: "Setting" },
];

const SidebarContainer = styled.div`
  width: 13rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  border-right: 1px solid #d3d3d3;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const LogoImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const LogoText = styled.span`
  color: #343c6a;
  font-size: 1.25rem;
  font-weight: 700;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  border-left: ${(props) =>
    props.active === "Dashboard"
      ? "5px solid #2d60ff"
      : "5px solid rgba(0,0,0,0)"};
  &:hover {
    background-color: #f0f0f0;
  }
`;

const MenuIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

const MenuText = styled.span`
  font-size: 0.875rem;
  color: #5a6474;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <LogoImage src={icon} alt="BankDash Logo" />
        <LogoText>BankDash.</LogoText>
      </LogoContainer>

      {menuItems.map((item, index) => (
        <MenuItem key={index} active={item.text}>
          <MenuIcon src={item.icon} alt={item.text} />
          <MenuText>{item.text}</MenuText>
        </MenuItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
