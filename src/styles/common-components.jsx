import styled from 'styled-components';

export const ButtonOutlined = styled.button`
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0.6rem 1.2rem;
  border: solid ${({ theme }) => theme.colors.text} 3px;
  color: ${({ theme }) => theme.colors.text};
  background: none;
  border-radius: 5px;
  z-index: 1;
  &:hover{
    border: solid ${({ theme }) => theme.colors.background.hover} 3px;
    color : ${({ theme }) => theme.colors.background.hover};
    cursor:pointer;
  }
`;

export const ButtonContained = styled.button`
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0.6rem 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  border: solid ${({ theme }) => theme.colors.text} 2px;
  z-index: 1;
  &:hover{
    background: ${({ theme }) => theme.colors.background.hover};
    color : ${({ theme }) => theme.colors.background.hover};
    color:white;
  }
`;

export const Background = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  &.active {
    z-index: 2;
    background: ${({ theme }) => theme.colors.background.normal};
    padding-top: 4rem;
    justify-content: start;
    font-size: 1.2rem;
    text-align: left;
    backdrop-filter: blur(20px);
  }
`;