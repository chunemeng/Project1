import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GuildInfoPage from "./GuildInfo";
import MemberListPage from "./MemberList";
import TaskProgressPage from "./TaskProgress";
import React from "react";
const AppRouter =  () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" component={<GuildInfoPage/>} />
            <Route path="/guildInfo" component={<GuildInfoPage/>} />
            <Route path="/memberList" component={<MemberListPage/>} />
            <Route path="/taskProgress" component={<TaskProgressPage/>} />
        </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;