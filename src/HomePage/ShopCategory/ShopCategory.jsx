import ToysCard from '../../components/ToysCard';
import './ShopCategory.css'
import { useEffect, useState } from 'react';


const ShopCategory = () => {
     // Define your categories and sub-categories
     const [selectedCategory, setSelectedCategory] = useState("Baby dolls");
     const [toys, setToys] = useState([])

   
    const handleCategory = (category) => {
      setSelectedCategory(category);
    
      // Fetch toys based on the current category
      fetch('https://toy-galaxy-server-plum.vercel.app/toys?category=' + encodeURIComponent(category))
        .then(res => res.json())
        .then(data => setToys(data));


      };
      useEffect(() => {
        // Fetch toys based on the initial selected category when the component mounts
        fetch('https://toy-galaxy-server-plum.vercel.app/toys?category=' + encodeURIComponent(selectedCategory))
          .then(res => res.json())
          .then(data => setToys(data));
      }, []); 
    
    // console.log(toys)
    
    return (
        <div className='md:w-5/6 w-full px-3 md:px-0 mx-auto mt-16'>
            <h1 className="text-center text-5xl text-rose-400 font-bold">Shop Category</h1>
            <div className="flex items-center justify-center w-1/2 mx-auto   my-10 ">
            <button
        className={`tab text-2xl tab-lifted ${selectedCategory === 'Baby dolls' ? 'tab-active' : ''}`}
        onClick={() => handleCategory('Baby dolls')}
      >
        Baby dolls
      </button>
      <button
        className={`tab text-2xl tab-lifted ${selectedCategory === 'Barbie' ? 'tab-active' : ''}`}
        onClick={() => handleCategory('Barbie')}
      >
        Barbie
      </button>
      <button
        className={`tab text-2xl tab-lifted ${selectedCategory === 'American girl' ? 'tab-active' : ''}`}
        onClick={() => handleCategory('American girl')}
      >
        American girl
      </button>
     
</div>

<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-28'>
  {
    toys.map((toy) => <ToysCard key={toy._id} toy={toy}></ToysCard>)
  }
</div>

        </div>
    );
};

export default ShopCategory;