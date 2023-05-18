import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/image/logo.png'
const Navigationbar = () => {
    return (
        <div style={{background: '#fff'}} className="navbar sticky top-3 z-10 backdrop-filter backdrop-blur-lg  bg-opacity-30 container md:mx-10 rounded-full">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li ><Link to='/'>Home</Link></li>
            <li ><Link to='/'>All Toys</Link></li>
            <li ><Link to='/'>Blog</Link></li>
            </ul>
          </div>
          <img src={logo} className='md:w-14 w-0 md:-mr-5' alt="" />
          <a className="btn btn-ghost normal-case text-xl">Toy Galaxy</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul  className=" space-x-5 menu-horizontal px-1">
            <li className='text-xl'><NavLink className={({ isActive}) => isActive ? "bg-rose-100 p-2 rounded-full" : "" } to='/'>Home</NavLink></li>
            <li className='text-xl'><NavLink className={({ isActive}) => isActive ? "bg-rose-100 p-2 rounded-full" : "" } to='/alltoys'>All Toys</NavLink></li>
            <li className='text-xl'><NavLink className={({ isActive}) => isActive ? "bg-rose-100 p-2 rounded-full" : "" } to='/blog'>Blog</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
        <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
        </div>
      </div>
    );
};

export default Navigationbar;