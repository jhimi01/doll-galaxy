import { useContext } from "react";
import { AuthContext } from "../AuthPrvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation();
    console.log(user)

    if(loader){
        <div style={{ display: "flex", justifyContent: "center" ,alignItems:'center' ,height:'55vh'}}>
      <progress className="progress w-3/4"></progress>
     </div>
    }

    if (user) {
        {children}
    }
    return <Navigate to='/login' state={{from: location}} replace/>
}
    export default PrivateRoute;