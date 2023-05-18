import { Link } from "react-router-dom";
import ErrorAnimation from '../assets/Error.json'
import Lottie from "lottie-react";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#ffff]">
   <Lottie style={{height: 300,}} animationData={ErrorAnimation} />
<h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-500 font-bold mb-4">
        We are sorry, but the page you were looking for could not be found.
      </p>


             <Link
        to="/"
        className=" bg-rose-400 text-white py-2 px-4 rounded hover:bg-rose-300"
      >
        Go back to home
      </Link>
        </div>
    );
};

export default ErrorPage;