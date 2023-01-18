import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../login/SignIn";
import SignUp from "../signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
