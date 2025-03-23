import { useEffect, useState } from 'react';
import Header from "../components/Header.jsx";
import { Outlet } from "react-router-dom";
import PageLoading from "../components/PageLoading.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
