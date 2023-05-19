import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthPrvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
const Register = () => {

    let navigate = useNavigate();
    const [error, setError] = useState('')
    const [success, setSeccess] = useState('')
    const { singupEmailPass, loginWithGoogleAuth } = useContext(AuthContext)
    let from = '/';
    const handleRegistration = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const url = form.url.value;
      console.log(name, email, password, url);
      

      singupEmailPass(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        form.reset()
        setSeccess('registered successfully')
        setError('')
        navigate(from, {replace: true})
      }).catch(error => {
    const errorMessage = error.message;
    setError(errorMessage)
    setSeccess('')
    console.log(errorMessage)
      });


    };

    const handleGoogle =()=>{
        loginWithGoogleAuth()
        .then(result => {
            const user = result.user;
            console.log(user)
            setSeccess('registered successfully')
            setError('')
            navigate(from, {replace: true})
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
     <form onSubmit={handleRegistration}>
     <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="your name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="url" placeholder="Photo Url" name='url' className="input input-bordered" required/>
        </div>
       
        <div className="form-control mt-3">
        <input type="submit" className="btn btn-secondary" value='Register' />
        {error && <p className='text-red-600'>{error}</p>}
        {success && <p className='text-green-800'>{success}</p>}
        </div>
     </form>
     <div className="divider">OR</div>
            <button onClick={handleGoogle} className="btn btn-secondary" >Login with Google <FaGoogle className="text-xl text-rose-500 ml-2"/></button>
        <p>Do you have an account? <Link to='/login'><span className='underline'>Login</span></Link></p>
      </div>
    </div>
    </div>
  </div>

    );
};

export default Register;