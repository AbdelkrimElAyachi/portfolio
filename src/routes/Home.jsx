import styled from 'styled-components';
import { useEffect } from 'react';
import { lightTheme, darkTheme } from '../theme.js';
import Background1 from '../assets/bg-home-1.jpg';
import TextDynamic from '../components/TextDynamic.jsx';
import { Link } from 'react-router-dom';
import { ButtonOutlined, ButtonContained, Background } from '../styles/common-components';

const Container = styled.div`
  margin-top:100vh;
  height:100vh;
  background: #000;
  position:relative;
  display:flex;
  color:white;
  z-index:1;
  @media (max-width:800px) {
    flex-direction:column;
    height:120vh;
  }
`;

const Image = styled.img`
  flex:1;
  height:100%;
  object-fit:cover;
  @media (max-width:800px) {
    height:50%
  }
`
const Div = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  @media (max-width:800px) {
    height:50%
  }
`

export default function Home({ setTheme }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Check if vertical scroll distance is greater than or equal to viewport height
      if (scrollPosition >= viewportHeight - 100) {
        setTheme(darkTheme);
      } else {
        setTheme(lightTheme);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setTheme]);

  return (
    <>      
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
      <Container>
        <Image src={Background1} />
        <Div >
          <TextDynamic Words={["About Me","Abdelkrim"]} duration={300} />
          <p style={{ width: '80%' }}>a full stasck web developper from casablanca Morocco, Currently working as freelancer</p>
        </Div>
      </Container>
    </>
  )
}
