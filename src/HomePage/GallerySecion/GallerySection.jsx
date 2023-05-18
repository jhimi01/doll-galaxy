import gallery1 from '../../assets/image/toy1.jpg';
import gallery2 from '../../assets/image/toy2.jpg';
import gallery3 from '../../assets/image/toy3.jpg';
import gallery4 from '../../assets/image/toy4.jpg';
import gallery5 from '../../assets/image/toy5.jpg';
import gallery6 from '../../assets/image/toy6.jpg';
import gallery7 from '../../assets/image/toy7.jpg';
import gallery8 from '../../assets/image/toy8.jpg';
import gallery9 from '../../assets/image/toy9.jpg';
import gallery10 from '../../assets/image/toy10.jpg';
const GallerySection = () => {
    return (
        <div className='md:px-32 px-5'>
           <h1 className="text-center text-5xl text-rose-400 font-bold mb-10">Gallery</h1>
           <div className='flex justify-center gap-3'>
           <div className='flex items-center justify-center flex-col gap-3'>
           <img className='w-full h-full cursor-pointer' src={gallery7} alt="gallery1" />
            <img className='w-full h-full' src={gallery1} alt="gallery2" />
           <img className='w-full h-full' src={gallery8} alt="" />
           
           </div>
           <div className='flex items-center justify-center flex-col gap-3'>
           <img className='w-full h-full' src={gallery2} alt="gallery6" />
            <img className='w-full h-full' src={gallery10} alt="gallery7" />
            <img className='w-full h-full' src={gallery6} alt="" />
           
           </div>
           <div className='flex items-center justify-center flex-col gap-3'>
           <img className='w-full h-full' src={gallery3} alt="gallery3" />
            <img className='w-full h-full' src={gallery9} alt="gallery9" />
            <img className='w-full h-full' src={gallery7} alt="gallery10" />
           </div>
           <div className='flex items-center justify-center flex-col gap-3'>
           <img className='w-full h-full' src={gallery4} alt="gallery4" />
            <img className='w-full h-full' src={gallery5} alt="gallery5" />
            <img className='w-full h-full' src={gallery8} alt="gallery8" />
           </div>
           </div>
        </div>
    );
};

export default GallerySection;