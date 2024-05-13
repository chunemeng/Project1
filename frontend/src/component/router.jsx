import {BrowserRouter, useRouteError, Routes, Route} from 'react-router-dom'
import Profile from '../page/profile.jsx'
import Published from "../page/published.jsx";
import Login from "../page/login.jsx";
import WorkerPage from "../page/worker.jsx";
import View from "../page/view.jsx";
import HomePage from "../page/home.jsx";
import TaskPage from "../page/task.jsx";
import MyTaskPage from "../page/mytask";
import Publish from "../page/publish";
import UnionInfoPage from "../page/union_info";
import MemberListPage from "./MemberList";
import TaskProgressPage from "./TaskProgress";
import React from "react";
import Community from "../page/community";


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
            path: 'view',
            element: <View/>,
        }, {
            path: 'published',
            element: <Published/>
        }, {
            path: 'account',
            element: <Login/>
        }, {
            path: 'task',
            element: <TaskPage/>
        }, {
            path: 'profile',
            element: <Profile/>
        }, {
            path: 'mytask',
            element: <MyTaskPage/>
        }, {
            path: 'union',
            element: <UnionInfoPage/>
        }, {
            path: 'memberList',
            element: <MemberListPage/>
        }, {
            path: 'taskProgress',
            element: <TaskProgressPage/>
        }, {
            path: 'community',
            element: <Community/>
        }]
    return <BrowserRouter>
        <Routes><Route path={'/'}
                       element={<HomePage/>}>
        </Route>
            {router.map(route => <Route path={`/${route.path}`} element={route.element}/>)}
        </Routes>
    </BrowserRouter>
}


