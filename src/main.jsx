import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
// imort style components
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './index.css';
import { theme } from './theme';

// import react rotuer
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// import pages
import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";

const router = (setLoading) => createBrowserRouter([
  {
    path: "/",
    element: <App setLoading={setLoading} />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
]);


function Root() {
  const [loading, setLoading] = useState(true);


  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        {loading ?
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
          :
          null
        }
        <RouterProvider router={router(setLoading)} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />)
