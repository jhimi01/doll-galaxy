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
import PrivateRoute from './routes/PrivateRoute';
import SingleToys from './pages/SingleToys/SingleToys';
import Viewdetails from './pages/Viewdetails/Viewdetails';

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
        path: '/toys/all/:id',
        element: <PrivateRoute><Viewdetails></Viewdetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-galaxy-server-plum.vercel.app/toys/all/${params.id}`)
      },{
        path:'/shopby/:id',
        element: <PrivateRoute><SingleToys></SingleToys></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-galaxy-server-plum.vercel.app/toys/shopby/${params.id}`)
       },
      {
        path: '/addtoys',
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path: '/mytoys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
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
