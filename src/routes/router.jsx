import { createBrowserRouter } from "react-router-dom";
import { DEATIL_PATH, HOME_PATH } from "../constants";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import JoinPage from "../pages/JoinPage";
import LogInPage from "../pages/LogInPage";

const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <LogInPage />,
  },
  {
    path: "/main",
    element: <HomePage />,
  },
  {
    path: "/join",
    element: <JoinPage />,
  },
  {
    path: DEATIL_PATH(":detailId"),
    element: <DetailPage />,
  },
]);

export default router;
