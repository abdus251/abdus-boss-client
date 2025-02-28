import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({ children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()

    if(loading){
        return <progress className="progress w-56"></progress>
    }

if(user && isAdmin) {
return children
}

return <Navigate to="/" state={{from: location.pathname}} replace></Navigate>

};

export default AdminRoute