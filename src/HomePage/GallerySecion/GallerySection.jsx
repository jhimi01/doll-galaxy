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
import './GallerySection.css'
import { useState } from 'react';
const GallerySection = () => {
    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
        gallery9,
        gallery10,
        gallery4,
        gallery5
      ];
      
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
    return (
        <div className='md:px-0 px-3 w-full md:w-5/6 mx-auto'>
         
           {/* <div className='flex justify-center gap-3'>
           <div className='flex items-center justify-center flex-col gap-3'>
           <img className='rounded w-full h-full cursor-pointer' src={gallery7} alt="gallery1" />
            <img className='rounded cursor-pointer w-full h-full' src={gallery1} alt="gallery2" />
           <img className='rounded cursor-pointer w-full h-full' src={gallery8} alt="" />
           
           </div>
           <div className='flex items-center justify-center flex-col gap-3'>
           <img className='rounded cursor-pointer w-full h-full' src={gallery2} alt="gallery6" />
            <img className='rounded cursor-pointer w-full h-full' src={gallery10} alt="gallery7" />
            <img className='rounded cursor-pointer w-full h-full' src={gallery6} alt="" />
           
           </div>
           <div className='flex items-center justify-center flex-col gap-3'>
           <img className='rounded cursor-pointer w-full h-full' src={gallery3} alt="gallery3" />
            <img className='rounded cursor-pointer w-full h-full' src={gallery9} alt="gallery9" />
            <img className='rounded cursor-pointer w-full h-full' src={gallery7} alt="gallery10" />
           </div>
           <div className='flex items-center justify-center flex-col gap-3'>
           <img className='rounded cursor-pointer w-full h-full' src={gallery4} alt="gallery4" />
            <img className='rounded cursor-pointer w-full h-full' src={gallery5} alt="gallery5" />
            <img className='rounded cursor-pointer w-full h-full' src={gallery8} alt="gallery8" />
           </div>
           </div> */}
          
           <div className="container mx-auto px-4 py-8">
           <div className='text-center md:my-10 my-5'>
          <h1 className="text-center md:text-5xl text-3xl text-rose-400 font-bold md:mb-4 mb-1">Photo Gallery</h1>
           <p className='text-gray-700 md:text-xl text-xs'>At our company, our top priority is the happiness and success of our clients. We are dedicated to building strong and long-lasting relationships, and we are grateful for the trust and confidence our clients place in us.</p>
          </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-gray-200 rounded-lg shadow-md"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full"
              style={{objectFit: 'cover'}}
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
              <button
                className="px-4 py-2 bg-secondary text-white rounded-lg"
                onClick={() => openModal(image)}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed top-0 z-50 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="max-w-sm mx-auto bg-white p-4 rounded-lg">
            <img src={selectedImage} alt="Selected Image" className="w-full" />
            <button
              className="mt-4 px-4 py-2 bg-secondary text-white rounded-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
           </div>
      
    );
};

export default GallerySection;