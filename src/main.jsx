import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './MainLayout.jsx';
import Home from './HomePage/Home/Home.jsx';
import Blog from './pages/Blog';
import AllToys from './pages/AllToys/AllToys';
import ErrorPage from './pages/ErrorPage';
import Register from './pages/Register/Register';
import AuthProvider from './AuthPrvider/AuthProvider';
import Login from './pages/Login/Login';
import AddToys from './pages/AddToys/AddToys';
import MyToys from './pages/MyToys/MyToys';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },{
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: '/addtoys',
        element: <AddToys></AddToys>
      },
      {
        path: '/mytoys',
        element: <MyToys></MyToys>
      },
      {
        path: '/register',
        element: <Register></Register>
      },{
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
