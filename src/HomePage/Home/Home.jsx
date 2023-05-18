import About from "../About/About";
import Banner from "../Banner/Banner";
import GallerySection from "../GallerySecion/GallerySection";
import ReviewPage from "../ReviewPage/ReviewPage";
import ShopCategory from "../ShopCategory/ShopCategory";


const Home = () => {
    return (
        <div>
          <div>
          <Banner></Banner>
          </div>
          <div>
            <About></About>
          </div>
           <div className="my-10">
            <GallerySection></GallerySection>
           </div>
           <div>
            <ShopCategory></ShopCategory>
           </div>
           <div className="bg-[#fddcd5] py-20">
            <ReviewPage></ReviewPage>
           </div>

        </div>
    );
};

export default Home;