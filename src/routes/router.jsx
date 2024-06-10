import { createBrowserRouter } from "react-router-dom";
import DetailAccountPage from "../components/DetailAccountPage";
import HomePage from "../components/HomePage";
import { DEATIL_PATH, HOME_PATH } from "../constants";

const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <HomePage />,
  },
  {
    path: DEATIL_PATH(":detailId"),
    element: <DetailAccountPage />,
  },
]);

export default router;
