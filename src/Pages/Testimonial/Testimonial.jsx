/* eslint-disable react/no-unescaped-entities */

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Button from "../Shared/Button.jsx/Button";
import Client from "./clientRevuew/Client";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../../Porviders/Authprovider";

const Testimonials = () => {
    const { user } = useContext(Authcontext)
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-20 pb-10 px-10 p-5">
            <div className="text-xl">
                <h1 className=" text-navbar text-sky text-2xl font-bold">The Best Place buying Car</h1>
                <p className="text-navbar text-white text-sm mb-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <Link to={`${user ? '/alltoys' : '/login'}`}>
                    <Button name={'Show Products'}> <FaShoppingBag />  </Button>
                </Link>
            </div>
            <div>
                <Carousel

                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}

                >
                    <div>
                        <Client />
                    </div>
                    <div>
                        <Client />
                    </div>
                    <div>
                        <Client />
                    </div>
                    <div>
                        <Client />
                    </div>
                </Carousel>
            </div>
        </div >
    );
};

export default Testimonials;