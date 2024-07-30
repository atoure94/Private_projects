import { Route, Routes} from "react-router-dom";
import AboutUs from "../pages/AboutUs.tsx";
import Home from "../pages/Home.tsx";
import App from "../../App.tsx";

const MainRoutes: React.FC =() =>{
    return(

            <Routes>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/about'} element={<AboutUs/>}/>
            </Routes>


    );
}

export default MainRoutes