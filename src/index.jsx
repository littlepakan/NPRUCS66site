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
import Mentors from './pages/Mentors.jsx';
import UserEdit from './pages/UserEdit.jsx';
import Schedules from './pages/Schedules.jsx';
import Linksbeta from './pages/Linksbeta.jsx';
import StudentList from './pages/StudentList.jsx';

//Page Router
const router = createBrowserRouter([
  //////////////////////////////    Mainpages    ///////////////////////////////////
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
  //////////////////////////////    Subpages    ///////////////////////////////////
  {
    path: "/mentors",
    element: <Mentors />
  },
  {
    //Individual Editing
    path: "/useredit/:id",
    element: <UserEdit />
  },
  {
    path: "/linksbeta",
    element: <Linksbeta />
  },
  {
    path: "/schedules",
    element: <Schedules />
  },
  {
    path: "/stdlist",
    element: <StudentList />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);