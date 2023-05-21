import { useContext } from "react";
import { AuthContext } from "../AuthPrvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation();

    if(loader){
       return  <div style={{ display: "flex", justifyContent: "center" ,alignItems:'center' ,height:'55vh'}}>
       <progress className="progress w-3/4"></progress>
      </div>
    }

    if (user) {
       return children
    }
    Swal.fire("You have to log in");
    return <Navigate to='/login' state={{from: location}} replace/>
}
    export default PrivateRoute;