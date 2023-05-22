import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './routes/ErrorPage.tsx';
import Index from './routes/Index/Index.tsx';
import NavBar from './routes/Nav/NavBar.tsx';
import Footer from './routes/Footer/Footer.tsx';
import Guides from './routes/Guides/Guides.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/index",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/meow",
    element: <p>aou</p>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/navbarIsolationPoc",
    element: <NavBar />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/footerIsolationPoc",
    element: <Footer />,
    errorElement: <ErrorPage />,
  },
  // ideally we would have a database with the blog text information. We don't need to do that if we just append html ig...
  // {
  //   path: "blog/:id",
  //   element: <Blog />,
  // },
  {
    path: "/guides",
    element: <Guides />,
    errorElement: <ErrorPage />,
  },
]);



export default function App() {
  return <RouterProvider router={router} />;
}