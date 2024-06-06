import {useEffect} from 'react';
import Header from "../components/Header.jsx";
import {Outlet} from "react-router-dom";


export default function App({setLoading}){

  useEffect(()=>{
    setLoading(false);
  });

  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}
