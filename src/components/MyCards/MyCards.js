import React from "react";
import styled from "styled-components";
import chipcard from "../../assets/Chip_Card.png";
import cc from "../../assets/Chip_Card_2.png";

// const LayoutContainer = styled.div`
//   display: flex;
//   gap: 1rem;
//   padding: 1rem;
//   background-color: #f5f7fa;
//   flex: 2;
// `;

const SectionContainer = styled.div`
  flex: 3;
  height: auto;
`;

const SectionTitle = styled.h2`
  color: #343c6a;
  font-size: 1.25rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding-bottom: 1rem;
`;

const SeeAll = styled.span`
  color: #343c6a;
  font-size: 0.875rem;
  cursor: pointer;
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Card = styled.div`
  background: ${({ gradient }) => gradient || "#fff"};
  border-radius: 1rem;
  width: 24rem;
  height: 15rem;
  color: ${({ textColor }) => textColor || "#fff"};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${({ border }) => (border ? "1px solid #d3d3d3" : "none")};
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Balance = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

const CardDetails = styled.div`
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MyCards = () => {
  return (
    // <LayoutContainer>
    <SectionContainer>
      <SectionTitle>
        My Cards
        <SeeAll>See All</SeeAll>
      </SectionTitle>
      <CardsWrapper>
        <Card
          gradient="linear-gradient(135deg, #3a53c4, #635bfa)"
          textColor="#fff"
        >
          <CardTop>
            <div>
              <Balance>$5,756</Balance>
              <CardDetails>
                CARD HOLDER
                <br />
                Eddy Cusuma
              </CardDetails>
            </div>
            <img src={chipcard} alt="Chip Card" width="32" height="32" />
          </CardTop>
          <CardBottom>
            <div>3778 **** **** 1234</div>
            <div>VALID THRU 12/22</div>
          </CardBottom>
        </Card>
        <Card gradient="#ffffff" textColor="#343c6a" border={true}>
          <CardTop>
            <div>
              <Balance>$5,756</Balance>
              <CardDetails>
                CARD HOLDER
                <br />
                Eddy Cusuma
              </CardDetails>
            </div>
            <img src={cc} alt="Chip Card 2" width="32" height="32" />
          </CardTop>
          <CardBottom>
            <div>3778 **** **** 1234</div>
            <div>VALID THRU 12/22</div>
          </CardBottom>
        </Card>
      </CardsWrapper>
    </SectionContainer>
    // </LayoutContainer>
  );
};

export default MyCards;
