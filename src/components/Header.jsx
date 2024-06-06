import styled, { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Background = styled.div`
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
  gap: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  &.active {
    z-index: 1;
    background: ${({ theme }) => theme.colors.background};
    padding-top: 5rem;
    justify-content: start;
    font-size: 1.2rem;
    text-align: left;
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

const NavNormal = styled.header`
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
  border: solid ${({ theme }) => theme.colors.text} 1px;
  color: ${({ theme }) => theme.colors.text};
  background: none;
  border-radius: 5px;
  z-index: 1;
`;

const ButtonContained = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 1.2rem;
  color: ${({ theme }) => theme.colors.buttonText};
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  border: solid ${({ theme }) => theme.colors.border} 1px;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Line = styled.div`
  height: 3px;
  width: 25px;
  background: ${({ theme }) => theme.colors.text};
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

const Item = styled.div`
  position: relative;
  height: 30px;
  & > a {
    margin: 0.6rem 0.8rem;
  }
  & > div {
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.colors.text};
    transition: 0.5s;
  }
  & > div.left {
    left: 0;
    bottom: 0;
  }
  & > div.right {
    top: 0;
    right: 0;
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
          <NavNormal>
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
                <Link to="#">Home</Link>
                <div className="right"></div>
              </Item>
              <Item>
                <Link to="#">Home</Link>
              </Item>
              <Item>
                <Link to="#">Home</Link>
              </Item>
            </div>
            <ButtonOutlined style={{ borderRadius: '50px', fontSize: '1rem' }}>
              <Link to="#">Contact Me</Link>
            </ButtonOutlined>
          </NavNormal>
        )}
      </div>
      {isActive && mobile ? (
        <Background className="active">
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <li
              style={{
                borderBottom: '1px solid white',
                paddingLeft: '1.3rem',
              }}
            >
              Home
            </li>
            <li
              style={{
                borderBottom: '1px solid white',
                paddingLeft: '1.3rem',
              }}
            >
              Contact me
            </li>
            <li
              style={{
                borderBottom: '1px solid white',
                paddingLeft: '1.3rem',
              }}
            >
              Services
            </li>
          </ul>
        </Background>
      ) : null}
      <Background>
        <h1>Full Stack Web Developpement And Responsive Design</h1>
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
