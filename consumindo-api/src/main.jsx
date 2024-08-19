import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from './routers/home.jsx';
import NewPost from './routers/NewPost.jsx'
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    element: <App />, 
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/new',
        element: <NewPost/ >
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
);
