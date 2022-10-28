import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/Faq";
import Blog from "../components/Blog";
import CourseDetails from "../components/CourseDetails";
import CheckOut from "../components/Checkout/CheckOut";
import PrivateRoute from "../Routes/PrivateRoute/PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
        path: "/course/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`https://think-showcase-server.vercel.app/course/${params.id}`),
      },
      {
        path: "/courseDetails/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://think-showcase-server.vercel.app/course/${params.id}`),
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
