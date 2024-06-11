import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const buildAnimation = keyframes`
  100% { top: 0; }
`;

const StyledB = styled.b`
  height: 100%;
  width: 100%;
  position: absolute;
  top: -101%;
  animation: ${buildAnimation} 0.4s cubic-bezier(1, 1.02, 0.005, 1.02) forwards;

  &:nth-child(1) { animation-delay: 0.3s; }
  &:nth-child(2) { animation-delay: 0.6s; }
  &:nth-child(3) { animation-delay: 0.9s; }
  &:nth-child(4) { animation-delay: 1.2s; }
  &:nth-child(5) { animation-delay: 1.5s; }
  &:nth-child(6) { animation-delay: 1.8s; }
  &:nth-child(7) { animation-delay: 2.1s; }
  &:nth-child(8) { animation-delay: 2.4s; }
`;

const StyledP = styled.p`
  width: 100%;
  height: 13%;
  background: ${({ theme }) => theme.colors.secondary};
  position: absolute;

`;

export default function PageLoading() {
  return (
    <Container>
      <StyledB><StyledP style={{ bottom: 0 }} /></StyledB>
      <StyledB><StyledP style={{ bottom: '12%' }} /></StyledB>
      <StyledB><StyledP style={{ bottom: '25%' }} /></StyledB>
      <StyledB><StyledP style={{ bottom: '37%' }} /></StyledB>
      <StyledB><StyledP style={{ bottom: '50%' }} /></StyledB>
      <StyledB><StyledP style={{ bottom: '62%' }} /></StyledB>
      <StyledB><StyledP style={{ bottom: '75%' }} /></StyledB>
      <StyledB><StyledP style={{ bottom: '87%' }} /></StyledB>
    </Container>
  );
}

