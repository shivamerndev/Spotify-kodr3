import { createBrowserRouter } from "react-router-dom";
import App from "../app/App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Upload from "../pages/Upload";
import ChatPage from "../chats/pages/ChatPage";

const ROUTES = createBrowserRouter([{
    element: <App />,
    children: [
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/upload",
            element:<Upload/>
        },
        { 
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path:"/chat",
            element:<ChatPage/>
        }
    ]
}])

export default ROUTES
