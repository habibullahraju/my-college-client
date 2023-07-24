import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import Colleges from "../pages/Colleges/Colleges";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: '/college-details',
          element: <DetailsPage></DetailsPage>
        },
        {
          path: "/colleges",
          element: <Colleges></Colleges>
        }
      ]
    },
  ]);

  export default router;