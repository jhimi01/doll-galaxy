import baby1 from '../../assets/image/babybanner1.png'
import './Banner.css'
const Banner = () => {
    return (
       <div className="hero min-h-[90vh] md:min-h-[100vh] -mt-20 bg-[#fddcd5] banner-wave my-auto" 
      >
  <div className="md:flex items-center justify-between md:w-5/6 md:px-0 px-3 mx-auto">
    <div className=" text-black md:w-1/2 w-full md:mt-0 mt-32"  data-aos="fade-up"
     data-aos-duration="1000">
      <h1 className="mb-5 text-5xl md:text-7xl font-bold text-rose-400">Best Doll happy kids</h1>
      <p className="mb-5 text-xl text-gray-700 font-sans font-normal">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn  bg-rose-400 border-0 hover:bg-rose-300 text-rose-100 hover:text-rose-500">Get Toys</button>
      
    </div>
    <div className='md:w-1/2 w-full md:h-screen'  data-aos="fade-up"
     data-aos-duration="1000">
    <img src={baby1} alt="baby" className='w-full md:h-full h-0 object-cover' />
    </div>
  </div>
  
</div>
    );
};

export default Banner;