import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "../Login/Login.tsx";
import Register from "../Register/Register.tsx";
import {useState} from "react";
import Home from "../components/Home.tsx";

const MainRoute =()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {

        setIsLoggedIn(false);
    };
    const PrivateRoute = ({ element, ...rest }) => {
        // Check if user is logged in
        return isLoggedIn ? (
            element
        ) : (
            // Redirect to login page if not logged in
            <Navigate to="/" replace state={{ from: rest.location }} />
        );
    };
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Login isLoggedIn={isLoggedIn} onLogin={handleLogin}/>}/>
                <Route path={'/home'} element={<PrivateRoute element={<Home/>}/>}/>
                <Route path={'/register'} element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default MainRoute;