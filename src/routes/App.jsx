import { useEffect, useState} from 'react';
import Header from "../components/Header.jsx";
import { Outlet, useNavigation } from "react-router-dom";
import PageLoading from "../components/PageLoading.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  },[]);

  return (
    <>
      {isLoading?
        <PageLoading barCount={6} duration={2} />
        :
        <>
          <Header />
          <Outlet />
        </>
      }

    </>
  );
}
