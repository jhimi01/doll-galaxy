import './About.css'


const About = () => {
    return (
        <div className="md:flex items-center justify-between my-10 md:my-20 px-3 md:px-20">

<div className="md:w-1/2 w-full" data-aos="fade-right"  data-aos-duration="1000" >
    <h4 className="text-xl text-red-400">About us</h4>
    <h2 className="text-5xl text-gray-800 font-bold my-5">Best Products at One Place</h2>
    <p className="text-xl text-gray-700">A doll store is not merely a place to buy toys; it is a portal to a world where dreams, memories, and creativity intertwine. Through the allure of dolls, the spark of imagination, and the sense of community they foster, these stores hold a unique charm. So, step into the enchanting realm of a doll store and let it transport you to a place where dolls come to life, childhood memories are rekindled, and the magic of play reigns supreme.</p>
</div>
<div data-aos="fade-left" data-aos-duration="1000" className="w-full md:w-[400px] h-[400px] image-container md:mt-0 mt-6">
    <img className='w-full h-full'  src="https://i.ibb.co/GM3LVb7/pexels-max-bonda-15772692.jpg" alt="" />
</div>


        </div>
    );
};

export default About;


// style={{borderRadius: '50%', height: '400px'}}