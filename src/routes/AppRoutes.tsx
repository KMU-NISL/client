import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main.tsx";
import Introduce from "../pages/Introduce.tsx";
import Members from "../pages/Members.tsx";
import Publication from "../pages/Publication.tsx";
import Recruitment from "../pages/Recruitment.tsx";
import Research from "../pages/Research.tsx";
import React from "react";
import NotFound from "../pages/NotFound.tsx";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/introduce" element={<Introduce/>}/>
            <Route path="/members" element={<Members/>}/>
            <Route path="/publication" element={<Publication/>}/>
            <Route path="/recruitment" element={<Recruitment/>}/>
            <Route path="/research" element={<Research/>}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );
}

export default AppRoutes;