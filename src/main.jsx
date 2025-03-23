import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
// imort style components
import './index.css';
import { lightTheme } from './theme.js';

// import react rotuer
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// import pages
import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";

const router = (setTheme) => createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home setTheme={setTheme} />
      }
    ]
  },
]);


function Root() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router(setTheme)} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />)
