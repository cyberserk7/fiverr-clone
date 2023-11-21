import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Gigs from "./components/Gigs/Gigs.jsx"
import Gig from "./components/Gig/Gig.jsx"
import Add from "./components/Add/Add.jsx"
import Orders from "./components/Orders/Orders.jsx"
import Messages from "./components/Messages/Messages.jsx"
import Message from "./components/Message/Message.jsx"
import MyGigs from "./components/MyGigs/MyGigs.jsx"
import Login from "./components/login/Login.jsx"
import Register from "./components/register/Register.jsx"

import './app.scss'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

const Layout =() => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/gigs",
        element: <Gigs />,
      },
      {
        path:"/gig/:id",
        element: <Gig />,
      },
      {
        path:"/orders",
        element: <Orders />,
      },
      {
        path:"/mygigs",
        element: <MyGigs />,
      },
      {
        path:"/add",
        element: <Add />,
      },
      {
        path:"/messages",
        element: <Messages />,
      },
      {
        path:"/message/:id",
        element: <Message />,
      },
    ]
  },
  {
    path:"/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
