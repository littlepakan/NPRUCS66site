import React from 'react';
import ReactDOM from 'react-dom/client';

import { 
  createBrowserRouter,
  RouterProvider,
 } from 'react-router-dom';

 // import App from './App';
import "./index.css";

//Page Path
import Home from './pages/Home.jsx';
import News from './pages/News.jsx';
import Links from './pages/Links.jsx';
// import Motivation from './pages/Motivation.jsx';
import Experiments from './pages/Experiments.jsx';
import Donation from './pages/Donation.jsx';
import Contact from './pages/Contact.jsx';

//SubPage Path
import Mentor from './pages/Mentor.jsx';


//Page Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/news",
    element: <News />
  },
  {
    path: "/links",
    element: <Links />
  },
  // {
  //   path: "/motivation",
  //   element: <Motivation />
  // },
  {
    path: "/experiments",
    element: <Experiments />
  },
  {
    path: "/donation",
    element: <Donation />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  ///////////////////////////////////////////////////////////////////////
  {
    path: "/mentor",
    element: <Mentor />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);