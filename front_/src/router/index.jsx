import {createBrowserRouter, useRouteError} from 'react-router-dom'
import Index from '@/views/index.jsx'
import Centre from '@/views/centre/index.jsx'
import Profile from '@/views/centre/profile.jsx'
import Account from "@/views/centre/account.jsx";
import App from "@/App.jsx";
import Task from "@/views/centre/task.jsx";
import Published from "@/views/centre/published.jsx";
import Add from "@/views/project/add.jsx";
import Login from "@/views/login.jsx";
import Programmer from "@/views/programmer.jsx";
import View from "@/views/project/view.jsx";
import About from "@/views/about.jsx";

const ErrorPage = () => {
// ts 发
// const error=useRouteError() as ErrorResponse & Error
// js
    const error = useRouteError()
    return (
        <>{error.statusText || error.message}</>
    )
}


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: ErrorPage,
        children:
            [{
                path: '',
                element: <Index/>,
            }, {
                path: 'centre',
                element: <Centre/>,
                children:
                    [{
                        path: 'profile',
                        element: <Profile/>,
                    }, {
                        path: 'account',
                        element: <Account/>,
                    }, {
                        path: 'task',
                        element: <Task/>,
                    }, {
                        path: 'published',
                        element: <Published/>,
                    },]
            },
                {
                    path: 'add',
                    element: <Add/>,
                },{
                    path: 'programmer',
                    element: <Programmer/>,
                },
                {
                    path: 'login',
                    element: <Login/>,
                },{
                    path: 'view',
                    element: <View/>,
                },{
                    path: 'about',
                    element: <About/>,
                },]
    },

])


export default router;