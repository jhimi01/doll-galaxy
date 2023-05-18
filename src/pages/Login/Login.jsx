import { Link, useLocation, useNavigate } from "react-router-dom";
import login from '../../assets/login.svg'
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthPrvider/AuthProvider";

const Login = () => {
    const { loginemailpass, loginWithGoogleAuth } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSeccess] = useState('')
    let navigate = useNavigate();
    let location = useLocation()
    let from = location.state?.from?.pathname || '/';

    const handlelogin=(e)=>{
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
  
        loginemailpass(email, password)
        .then(result => {
          const user = result.user;
          console.log(user)
          form.reset()
          setSeccess('logged in successfully')
          setError('')
          navigate(from, { replace: true });
        }).catch(error => {
      const errorMessage = error.message;
      setError(errorMessage)
      setSeccess('')
      console.log(errorMessage)
        });
    }

    const handleGoogle =()=>{
        loginWithGoogleAuth()
        .then(result => {
            const user = result.user;
            console.log(user)
            setSeccess('registered successfully')
            setError('')
            navigate(from, { replace: true });
          }).catch(error => {
        const errorMessage = error.message;
        setError(errorMessage)
        setSeccess('')
        console.log(errorMessage)
          });
    }




    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
             <img  src={login} alt="" />
           </div>
           <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-300">
             <div className="card-body">
             <h1 className="text-5xl font-bold text-secondary">Please Login</h1>
            <form onSubmit={handlelogin}>
            
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input type="text" name="email" placeholder="email" className="input input-bordered" />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Password</span>
                 </label>
                 <input type="text" name="password" placeholder="password" className="input input-bordered" />
                
               </div>
               <div className="form-control mt-6">
               <input type="submit" className="btn btn-secondary" value='Login' />
               {error && <p className='text-red-600'>{error}</p>}
               {success && <p className='text-green-800'>{success}</p>}
               </div>
            </form>
            <div className="divider">OR</div>
            <button onClick={handleGoogle} className="btn btn-secondary" >Login with Google</button>
            <input type="submit" value='' />
               <p>Are you new here? <Link to='/register'><span className='underline'>Register</span></Link></p>
             </div>
           </div>
           </div>
         </div>
    );
};

export default Login;