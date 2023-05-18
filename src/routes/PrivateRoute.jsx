import { useContext } from "react";
import { AuthContext } from "../AuthPrvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation();

    if(loader){
        <div style={{ display: "flex", justifyContent: "center" ,alignItems:'center' ,height:'55vh'}}>
       <div
         className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[center] motion-reduce:animate-[spin_1.5s_linear_infinite]"
         role="status"
       >
         <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
           Loading...
         </span>
       </div>
     </div>
    }

    if (user) {
        {children}
    }
    return <Navigate to='/login' state={{from: location}} replace/>
}
    export default PrivateRoute;