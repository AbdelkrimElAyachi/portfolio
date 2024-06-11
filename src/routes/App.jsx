import { useEffect } from 'react';
import Header from "../components/Header.jsx";
import { Outlet } from "react-router-dom";
import PageLoading from "../components/PageLoading.jsx";

export default function App({ setLoading, loading }) {

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  });

  return (
    <>
      {loading ?
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
