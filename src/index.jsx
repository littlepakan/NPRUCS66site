import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import "./index.css";
import { 
  createBrowserRouter,
  RouterProvider,
 } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import News from './pages/news/News.jsx';
import Links from './pages/links/Links.jsx';
import Motivation from './pages/motivation/Motivation.jsx';
import Donation from './pages/donation/Donation.jsx';
import Contact from './pages/contact/Contact';

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
  {
    path: "/motivation",
    element: <Motivation />
  },
  {
    path: "/donation",
    element: <Donation />
  },
  {
    path: "/contact",
    element: <Contact />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);