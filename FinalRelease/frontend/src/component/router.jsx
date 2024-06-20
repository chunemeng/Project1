import {BrowserRouter, useRouteError, Routes, Route} from 'react-router-dom'
import Profile from '../page/profile.jsx'
import Published from "../page/published.jsx";
import Login from "../page/login.jsx";
import WorkerPage from "../page/worker.jsx";
import HomePage from "../page/home.jsx";
import Publish from "../page/publish";
import UnionInfoPage from "../page/union_info";
import React from "react";
import TaskView from "../page/task_view.jsx";
import TaskAllPage from "../page/task";
import SignupPage from "../page/signup";


export default function Router() {
    const router = [
        {
            path: 'publish',
            element: <Publish/>,
        }, {
            path: 'worker',
            element: <WorkerPage/>,
        },
        {
            path: 'login',
            element: <Login/>,
        }, {
            path: 'task/:id',
            element: <TaskView/>,
        }, {
            path: 'published/:id',
            element: <Published/>
        }, {
            path: 'account',
            element: <Login/>
        }, {
            path: "task",
            element: <TaskAllPage/>
        }, {
            path: 'profile',
            element: <Profile/>
        }, {
            path: 'union/:id',
            element: <UnionInfoPage/>
        }, {
            path: 'register',
            element: <SignupPage></SignupPage>
        }]
    return <BrowserRouter>
        <Routes><Route path={'/'}
                       element={<HomePage/>}>
        </Route>
            <Route path={'/*'}
                   element={<HomePage/>}>
            </Route>
            {router.map(route => <Route path={`/${route.path}`} element={route.element}/>)}
        </Routes>
    </BrowserRouter>
}


