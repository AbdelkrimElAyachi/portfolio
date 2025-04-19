import { useEffect, useState} from 'react';
import Header from "../components/Header.jsx";
import { Outlet, useNavigation } from "react-router-dom";
import PageLoading from "../components/PageLoading.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  },[]);

  return (
    <>
      {isLoading?
        <PageLoading />
        :
        <>
          <Header />
          <Outlet />
        </>
      }

    </>
  );
}
