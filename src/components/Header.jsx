import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ButtonOutlined, Background } from '../styles/common-components';


const MobileNav = styled.header`
  position: fixed;
  margin-top: 0.6rem;
  padding: 0.4rem 1.2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
`;

const DesktopNav = styled.header`
  position: fixed;
  background:${({ theme }) => theme.colors.background.normal};
  border-radius:25px;
  backdrop-filter:blur(10px);
  margin-top: 0.6rem;
  padding: 0.4rem 1.2rem;
  width: 90%;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor:pointer;
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
  color: ${({ theme }) => theme.colors.text};
  &:hover{
    border-color:${({ theme }) => theme.colors.background.hover};
    margin-left:2rem;
  }
`;


const Item = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  & > button {
    margin: 0.5rem 0.8rem;
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
    bottom: 0;
    right: 0;
  }
  &:hover {
    // color: ${({ theme }) => theme.colors.background.hover};
  }
  &:hover div {
    background: ${({ theme }) => theme.colors.background.hover};
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
              <Item>
                <div className="left"></div>
                <button><Link to="#">My Projects</Link></button>
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
            <StyledListItem><Link to="#">Home</Link></StyledListItem>
            <StyledListItem><Link to="#">Contact me</Link></StyledListItem>
            <StyledListItem><Link to="#">Services</Link></StyledListItem>
            <StyledListItem><Link too="#">My Projects</Link></StyledListItem>
          </StyledList>
        </Background>
      ) : null}
    </>
  );
}
