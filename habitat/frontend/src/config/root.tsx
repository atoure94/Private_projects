import Acheter from "../pages/Acheter/Acheter.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App.tsx";
import Landing from "../pages/Landing/Landing.tsx";
import Login from "../pages/Login/Login.tsx";

const MainRoutes= ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Landing />}
                />
                <Route
                    path="/acheter"
                    element={<Acheter />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default MainRoutes