import { createBrowserRouter } from "react-router-dom";
import App from "../app/App";
import Login from "../pages/Login";
import Register from "../pages/Register";

const ROUTES = createBrowserRouter({
    path: "/",
    element: < App />,
    children: [
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        }
    ]
})

export default ROUTES