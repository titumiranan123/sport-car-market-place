/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Authcontext } from "../Porviders/Authprovider";
import { Navigate } from "react-router-dom";
import Loader from "../Pages/Loadder/Loader";


const Privateroute = ({ children }) => {
    const { user, lodder } = useContext(Authcontext);
    if (lodder) {
        return <Loader />
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default Privateroute;