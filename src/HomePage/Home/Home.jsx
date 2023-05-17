import Banner from "../Banner/Banner";
import GallerySection from "../GallerySecion/GallerySection";
import ShopCategory from "../ShopCategory/ShopCategory";

const Home = () => {
    return (
        <div>
          <div>
          <Banner></Banner>
          </div>
           <div className="my-10">
            <GallerySection></GallerySection>
           </div>
           <div>
            <ShopCategory></ShopCategory>
           </div>

        </div>
    );
};

export default Home;