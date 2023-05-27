import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Registration = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Registration;