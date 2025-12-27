import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { HotelDetails } from "./../pages/HotelDetails";
import Home from "../pages/Landing";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import { Contacts } from "../pages/Contacts";
import About from "../pages/About";
import Hotels from "../pages/Hotels";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "hotels/:id", element: <HotelDetails /> },
      { path: "hotels", element: <Hotels /> },
      { path: "about", element: <About /> },
      { path: "contacts", element: <Contacts /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default AppRouter;
