import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <progress className="progress progress-success w-56" max="100"></progress>;
    }

     if(user){
        return children;
     } else {
         return <Navigate state={{from: location}} replace to='/login'></Navigate>
     }
};

export default PrivateRoute;