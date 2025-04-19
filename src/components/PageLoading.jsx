import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const Container = styled.div`
  height: 100vh;
  height: 100dvh;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const buildAnimation = keyframes`
  0% { top: -100%; }
  90% {top : -100%;}
  100% { }
`;

const StyledContainer = styled.div.attrs(({ $duration, $barCount }) => ({
  style: {
    '--duration': `${$duration}s`,
    '--bar-count': $barCount,
  },
}))`
  height: 100%;
  width: 100%;
  top: 0%;
  z-index: 1;

  ${({ $barCount }) => 
    Array.from({ length: $barCount }).map((_, i) => css`
      & > *:nth-child(${i + 1}) { 
        animation: ${buildAnimation} calc(var(--duration) / ${$barCount} * ${i + 1}) ease-in-out forwards; 
      }
    `)
  }
`;

const StyledBar = styled.div.attrs(({ $barCount }) => ({
  style: {
    '--bar-count': $barCount,
  },
}))`
  width: 100%;
  margin: 0;
  padding: 0;
  height: calc(100% / var(--bar-count));
  background: ${({ theme }) => theme.colors.secondary};
  position: absolute;
`;

function PageLoading({ duration = 3, barCount = 8 }) {
  return (
    <Container>
      <StyledContainer $duration={duration} $barCount={barCount}>
        {Array.from({ length: barCount }).map((_, i) => (
          <StyledBar
            key={i} 
            $barCount={barCount}
            style={{ bottom: `calc((100% / ${barCount}) * ${i})` }} 
          />
        ))}
      </StyledContainer>
    </Container>
  );
}

PageLoading.propTypes = {
  duration: PropTypes.number,
  barCount: PropTypes.number
};

export default PageLoading;