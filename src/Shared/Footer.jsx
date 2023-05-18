import logo from '../assets/image/logo.png'
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className="footer mt-10 p-10 bg-rose-100 text-base-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer> 
<footer className="footer px-7 py-2 border-t bg-rose-100 text-base-content border-base-300">
  <div className="items-center grid-flow-col">
  <img src={logo} className='h-20 w-20' alt="logo" />
    <p>ACME Industries Ltd. <br/>Providing reliable tech since 1992</p>
  </div> 
  <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a><FaFacebookF className='text-2xl text-red-400'/></a> 
      <a><FaYoutube className='text-2xl text-red-400'/></a>
      <a><FaTwitter className='text-2xl text-red-400'/></a>
    </div>
  </div>
</footer>
        </>
    );
};

export default Footer;