import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/Faq";
import Blog from "../components/Blog";
import CourseDetails from "../components/CourseDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/courses",
        loader: () => fetch("https://think-showcase-server.vercel.app/courses"),
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
