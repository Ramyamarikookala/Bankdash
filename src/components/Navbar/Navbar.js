import React from "react";
import styled from "styled-components";
import notif from "../../assets/002-notification-1.png";
import maglass from "../../assets/magnifying-glass 1.png";
import christina from "../../assets/pexels-christina-morillo-1181690 1.png";
import setti from "../../assets/settings 1.png";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #ffffff;
  height: 5rem;
  width: calc(100% - 13rem);
  position: fixed;
  margin-left: 13rem;
`;

const Title = styled.span`
  color: #343c6a;
  font-size: 1.5rem;
  font-weight: 600;
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 15.9rem;
  height: 2.5rem;
  border-radius: 1.5rem;
  background-color: #f5f7fa;
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 0.875rem;
  color: #7d8da6;

  &::placeholder {
    color: #7d8da6;
    font-weight: 400;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 0.75rem;
  width: 1rem;
  height: 1rem;
`;

const ActionIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #f5f7fa;
  cursor: pointer;
`;

const IconImage = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Title>Overview</Title>
      <NavbarRight>
        <SearchContainer>
          <SearchIcon src={maglass} alt="Search icon" />
          <SearchInput type="text" placeholder="Search for something" />
        </SearchContainer>
        <ActionIcons>
          <IconButton>
            <IconImage src={setti} alt="Settings" />
          </IconButton>
          <IconButton>
            <IconImage src={notif} alt="Notifications" />
          </IconButton>
          <ProfileImage src={christina} alt="Profile" />
        </ActionIcons>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;
