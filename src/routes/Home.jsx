import styled from 'styled-components';
import { useEffect } from 'react';
import { lightTheme, darkTheme } from '../theme.js';


const Container = styled.div`
  margin-top:100vh;
  height:100vh;
  background: #000;
  position:relative;
  z-index:1;
`;

export default function Home({ setTheme }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Check if vertical scroll distance is greater than or equal to viewport height
      if (scrollPosition >= viewportHeight) {
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
      <Container />
    </>
  )
}
