import styled from 'styled-components';

export const ButtonOutlined = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 1.2rem;
  border: solid ${({ theme }) => theme.colors.third} 1px;
  color: ${({ theme }) => theme.colors.third};
  background: none;
  border-radius: 5px;
  z-index: 1;
  &:hover{
    border: solid ${({ theme }) => theme.colors.hoverBackground} 1px;
    color : ${({ theme }) => theme.colors.hoverBackground};
    cursor:pointer;
  }
`;

export const ButtonContained = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 1.2rem;
  color: ${({ theme }) => theme.colors.third};
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  border: solid ${({ theme }) => theme.colors.third} 1px;
  z-index: 1;
  &:hover{
    background: ${({ theme }) => theme.colors.hoverBackground};
    color:white;
  }
`;

export const Background = styled.div`
background: ${({ theme }) => theme.colors.primary};
height: 100vh;
width: 100%;
color: ${({ theme }) => theme.colors.third};
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
  background: ${({ theme }) => theme.colors.background};
  padding-top: 4rem;
  justify-content: start;
  font-size: 1.2rem;
  text-align: left;
  backdrop-filter: blur(20px);
}
`;