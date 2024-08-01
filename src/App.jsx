import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./AppRouter.jsx";

function App() {
  return (
    <RouterProvider router={AppRouter} fallbackElement={<span>loading</span>} />
  );
}

export default App;
