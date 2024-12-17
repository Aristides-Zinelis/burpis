
import { Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import ViewProgram from "../views/program/ViewProgram";

function AppRouter () {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/program" element={<ViewProgram/>}/>
        </Routes>
    )
}

export default AppRouter