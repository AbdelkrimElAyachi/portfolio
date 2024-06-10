import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Background = styled.div`
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
    z-index: 1;
    background: ${({ theme }) => theme.colors.background};
    padding-top: 4rem;
    justify-content: start;
    font-size: 1.2rem;
    text-align: left;
    backdrop-filter: blur(20px);
  }
`;

const MobileNav = styled.header`
  position: fixed;
  margin-top: 0.6rem;
  padding: 0.4rem 1.2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const DesktopNav = styled.header`
  position: fixed;
  margin-top: 0.6rem;
  padding: 0.4rem 1.2rem;
  width: 90%;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const ButtonOutlined = styled.button`
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

const ButtonContained = styled.button`
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Line = styled.div`
  height: 3px;
  width: 25px;
  background: ${({ theme }) => theme.colors.third};
  transition: transform 0.3s; /* Add transition for smooth rotation */
`;

const TopLine = styled(Line)`
  &.active {
    transform: rotate(45deg) translateY(7px) translateX(5px);
  }
`;

const BottomLine = styled(Line)`
  &.active {
    transform: rotate(-45deg) translateY(-7px) translateX(5px);
  }
`;

const CenterLine = styled(Line)`
  &.active {
    opacity: 0; /* Hide the center line */
  }
`;

// Define styled components
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const StyledListItem = styled.li`
  border-bottom: 1px solid white;
  padding-left: 1.3rem;
  transition: 0.3s;
  &:hover{
    border-color:${({ theme }) => theme.colors.hoverBackground};
    margin-left:2rem;
  }
`;


const Item = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.third};
  & > button {
    margin: 0.5rem 0.8rem;
  }
  & > div {
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.colors.third};
    transition: 0.5s;
  }
  & > div.left {
    left: 0;
    bottom: 0;
  }
  & > div.right {
    bottom: 0;
    right: 0;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.hoverBackground};
  }
  &:hover div {
    background: ${({ theme }) => theme.colors.hoverBackground};
    width: 3px;
    height: 100%;
  }
`;

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [mobile, setMobile] = useState(false);

  function clickMenuResponsive() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    const handleResize = () => {
      // Check window width
      if (window.innerWidth < 800) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    // Initial check on mount
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div style={{ padding: '0.1rem', width: '100%' }}>
        {/* if it is mobile display the mobile header else display the desktop header */}
        {mobile ? (
          <MobileNav>
            <Container onClick={() => clickMenuResponsive()}>
              <TopLine className={isActive ? 'active' : ''} />
              <CenterLine className={isActive ? 'active' : ''} />
              <BottomLine className={isActive ? 'active' : ''} />
            </Container>
            <ButtonOutlined style={{ borderRadius: '50px', fontSize: '1rem' }}>
              <Link to="#">Contact Me</Link>
            </ButtonOutlined>
          </MobileNav>
        ) : (
          <DesktopNav>
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: '#eee',
              }}
            >
              <Item>
                <div className="left"></div>
                <button><Link to="#">Home</Link></button>
                <div className="right"></div>
              </Item>
              <Item>
                <div className="left"></div>
                <button><Link to="#">About Me</Link></button>
                <div className="right"></div>
              </Item>
              <Item>
                <div className="left"></div>
                <button><Link to="#">Contact Me</Link></button>
                <div className="right"></div>
              </Item>
            </div>
            <ButtonOutlined style={{ borderRadius: '50px', fontSize: '1rem' }}>
              <Link to="#">Contact Me</Link>
            </ButtonOutlined>
          </DesktopNav>
        )}
      </div>
      {/* if isActive and mobile display the mobile menu */}
      {isActive && mobile ? (
        <Background className="active">
          <StyledList>
            <StyledListItem>Home</StyledListItem>
            <StyledListItem>Contact me</StyledListItem>
            <StyledListItem>Services</StyledListItem>
          </StyledList>
        </Background>
      ) : null}
      <Background>
        <h1>Full Stack Web Developpement And Responsive Design</h1>
        <p style={{ fontWeight: 'bold', width: '80%', marginBottom: '2rem' }}>
          Hey there! I'm a full-stack developer who loves bringing ideas to life. I can handle everything from designing in Figma and managing tasks in Jira to coding with tools like .NET, Laravel, Express, React, and Vue. I make sure the project fits the budget and gets smoothly hosted and live for everyone to see. Let's build something awesome together!
        </p>
        <ButtonOutlined>
          <Link to="#">My Projects</Link>
        </ButtonOutlined>
        <ButtonContained>
          <Link to="#">My Services</Link>
        </ButtonContained>
      </Background>
    </>
  );
}
