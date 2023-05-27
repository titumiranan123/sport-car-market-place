import { Outlet } from "react-router-dom";
import GallerySection from "../GallerSection/GallerySection";
import Header from "../Header/Header";
import ShopbyCategory from "../Shopbycategory/ShopbyCategory";
import Giftsection from "../Gift/Giftsection";
import Testimonials from "../../Testimonial/Testimonial";
import useTitle from "../../../Hook/Usetitle";


const Home = () => {
    useTitle("Sport Car Market Place")
    return (
        <div className="bg-blue">
            <Header />
            <GallerySection />
            <ShopbyCategory />
            <Outlet />
            <Giftsection />
            <Testimonials />
        </div>
    );
};

export default Home;