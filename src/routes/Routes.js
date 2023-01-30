import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layout/Main";

 const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
               path:'/login',
               element:<Login></Login>
            },
            {
               path:'/register',
               element:<Register></Register>
            }
        ]
    }
])
export default router