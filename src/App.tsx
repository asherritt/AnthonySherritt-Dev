import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {Home, Works} from './pages/'


function App() {

  const router = createBrowserRouter(
    [

      {
        path: "/",
        element: < Home/>
      },
      {
        path: "/works",
        element: < Works/>
      },

  ]
  )
  return <RouterProvider router={router} />
}

export default App;
