import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Comments from './pages/App';
import About from './pages/about';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Comments />
    },
    {
        path: "/about",
        element: <About />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <span>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap" rel="stylesheet"/>
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
  </span>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
