
import * as React from "react";
import { useState } from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
// import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./App.css"

import { useEffect } from "react";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Git from "./routes/Git";
import Navbar from "./components/Navbar";
import Contact from "./routes/contact";
import Stickers from "./routes/Stickers";
import Resume from "./routes/Resume";


const App = () =>{
 
  return(
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    
    
    element: <App/>,
  errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/git",
        element: <Git/>
      },
      {
        path: "/contacts",
        element: <Contact/>
      },{
        path: "/stickers",
        element: <Stickers/>
      },{
        path: "/resume",
        element: <Resume/>
      }
      
      
    ]
  }
  
  

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
