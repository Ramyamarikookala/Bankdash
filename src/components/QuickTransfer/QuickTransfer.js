import React, { useState } from 'react';
import styled from 'styled-components';

import marcelStrauss from '../../assets/marcel-strauss-Uc_tOqa_jDY-unsplash 1.png';
import christinaMorillo from '../../assets/pexels-christina-morillo-1181690 1.png';
import juliaVolk from '../../assets/pexels-julia-volk-5273755 1.png';
import paperPlane from '../../assets/paperplane.png';


const QuickTransferContainer = styled.div`
  background-color: #ffffff;
  border-radius: 1rem; /* 16px */
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  padding: 1.5rem; /* 24px */
  flex: 1;
`;

const SectionTitle = styled.h2`
  color: #343c6a;
  font-size: 1.5rem; /* 24px */
  font-weight: 600;
  margin-bottom: 1rem; /* 16px */
`;


const ContactsList = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem; /* 16px */
`;


const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  width: 5rem; /* 80px */

  &:hover {
    transform: scale(1.05);
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 4rem; /* 64px */
  height: 4rem; /* 64px */
`;


const ContactName = styled.span`
  color: #343c6a;
  font-size: 0.875rem; /* 14px */
  margin-top: 0.5rem; /* 8px */
`;


const TransferSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* 16px */
`;

const TransferInput = styled.input`
  flex: 1;
  padding: 0.5rem; /* 8px */
  border: 0.0625rem solid #e0e0e0; /* 1px */
  border-radius: 0.5rem; /* 8px */
  font-size: 1rem; /* 16px */
  outline: none;
`;

const SendButton = styled.button`
  background-color: #635bfa;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem; /* 8px */
  padding: 0.5rem 1rem; /* 8px 16px */
  font-size: 1rem; /* 16px */
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 8px */
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #3a53c4;
  }
`;

const contacts = [
  { name: 'Livia Bator', role: 'CEO', img: marcelStrauss },
  { name: 'Randy Press', role: 'Director', img: christinaMorillo },
  { name: 'Workman', role: 'Designer', img: juliaVolk },
];

const QuickTransfer = () => {
  const [transferAmount, setTransferAmount] = useState('');

  const handleTransfer = () => {
    // logic
    alert(`Transferred {transferAmount}`);
    setTransferAmount(''); 
  };

  return (
    <QuickTransferContainer>
      <SectionTitle>Quick Transfer</SectionTitle>
      <ContactsList>
        {contacts.map((contact, index) => (
          <Contact key={index}>
            <ProfileImage src={contact.img} alt={contact.name} />
            <ContactName>{contact.name}</ContactName>
          </Contact>
        ))}
      </ContactsList>
      <TransferSection>
        <TransferInput
          type="number"
          placeholder="Write Amount"
          value={transferAmount}
          onChange={(e) => setTransferAmount(e.target.value)}
        />
        <SendButton onClick={handleTransfer}>
          <img src={paperPlane} alt="Send" style={{ width: '1rem', height: '1rem' }} />
          Send
        </SendButton>
      </TransferSection>
    </QuickTransferContainer>
  );
};

export default QuickTransfer;
