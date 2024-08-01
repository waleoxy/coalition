import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import PatientsPage from "../pages/PatientsPage";
import ErrorPage from "../pages/ErrorPage";
import { getAllPatients } from "../services/getAllPatients";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PatientsPage />,
        loader: async () => {
          return await getAllPatients();
        },
      },
      {
        path: "patients",
        element: <PatientsPage />,
        loader: () => "",
      },
    ],
  },
]);
