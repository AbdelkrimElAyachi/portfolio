import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  height: 100vh;
  height: 100dvh;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const buildAnimation = keyframes`
  0% {top: -100%}
  100% {}
`;

const StyledB = styled.div`
  height: 100%;
  width: 100%;
  top: 0%;
  z-index: 1;

  & > *:nth-child(1) { animation: ${buildAnimation} calc(calc(3s/8)*1) ease-in-out forwards; }
  & > *:nth-child(2) { animation: ${buildAnimation} calc(calc(3s/8)*2) ease-in-out forwards; }
  & > *:nth-child(3) { animation: ${buildAnimation} calc(calc(3s/8)*3) ease-in-out forwards; }
  & > *:nth-child(4) { animation: ${buildAnimation} calc(calc(3s/8)*4) ease-in-out forwards; }
  & > *:nth-child(5) { animation: ${buildAnimation} calc(calc(3s/8)*5) ease-in-out forwards; }
  & > *:nth-child(6) { animation: ${buildAnimation} calc(calc(3s/8)*6) ease-in-out forwards; }
  & > *:nth-child(7) { animation: ${buildAnimation} calc(calc(3s/8)*7) ease-in-out forwards; }
  & > *:nth-child(8) { animation: ${buildAnimation} calc(calc(3s/8)*8) ease-in-out forwards; }
`;

const StyledP = styled.div`
  width: 100%;
  margin:0;
  padding:0;
  height: calc(100% / 8);
  background: ${({ theme }) => theme.colors.secondary};
  position: absolute;
`;

export default function PageLoading() {
  return (
    <Container>
      <StyledB>
      <StyledP style={{ bottom: 'calc(calc(100%/8)*0)' }} />
      <StyledP style={{ bottom: 'calc(calc(100%/8)*1)' }} />
      <StyledP style={{ bottom: 'calc(calc(100%/8)*2)' }} />
      <StyledP style={{ bottom: 'calc(calc(100%/8)*3)' }} />
      <StyledP style={{ bottom: 'calc(calc(100%/8)*4)' }} />
      <StyledP style={{ bottom: 'calc(calc(100%/8)*5)' }} />
      <StyledP style={{ bottom: 'calc(calc(100%/8)*6)' }} />
      <StyledP style={{ bottom: 'calc(calc(100%/8)*7)' }} />
      </StyledB>
    </Container>
  );
}

