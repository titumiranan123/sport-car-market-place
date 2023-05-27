/* eslint-disable no-undef */
import Button from "../../Shared/Button.jsx/Button";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])
    return (
        <div className="px-10 ">
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" className="w-full lg:h-[550px] " />
                    <div className="absolute  transform -translate-y-1/2 md:top-32 top-48 md:left-32 lg:left-60 lg:right-10 lg:top-28 " data-aos="fade-right" data-aos-delay="10"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"  >
                        <p className="text-white md:text-5xl lg:text-6xl font-bold " >
                            Gifts for <br /> <span className="text-sky"> all occasions</span>
                        </p>
                        <p className="text-white hidden md:block lg:block w-2/5 text-lg mt-2 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam, at vero consequatur maiores repudiandae distinctio voluptatibus incidunt deserunt ......</p>
                        <p className="text-white md:hidden lg:hidden lg:w-2/5 md:w-2/5 text-lg mt-2 mb-2">Lorem, ipsum dolor sit Voluptas quibusdam, at vero consequatur maiores   incidunt deserunt ......</p>
                        <Button name='Check More product'>
                            <FaShoppingCart className="" />
                        </Button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1521228670520-81bb7638fc10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full lg:h-[550px]" />
                    <div className="absolute  transform -translate-y-1/2 md:top-32 top-48 md:left-32 lg:left-60 lg:right-10 lg:top-28 " data-aos="fade-right" data-aos-delay="10"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"  >
                        <p className="text-white md:text-5xl lg:text-6xl font-bold " >
                            Gifts for <br /> <span className="text-sky"> all occasions</span>
                        </p>
                        <p className="text-white hidden md:block lg:block w-2/5 text-lg mt-2 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam, at vero consequatur maiores repudiandae distinctio voluptatibus incidunt deserunt ......</p>
                        <p className="text-white md:hidden lg:hidden lg:w-2/5 md:w-2/5 text-lg mt-2 mb-2">Lorem, ipsum dolor sit Voluptas quibusdam, at vero consequatur maiores   incidunt deserunt ......</p>
                        <Button name='Check More product'>
                            <FaShoppingCart className="" />
                        </Button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://as2.ftcdn.net/v2/jpg/05/99/28/49/1000_F_599284940_PiXK4KcyYiOYqY98g4ljYvQ0ejd5GGEL.jpg" className="w-full lg:h-[550px]" />
                    <div className="absolute  transform -translate-y-1/2 md:top-32 top-48 md:left-32 lg:left-60 lg:right-10 lg:top-28 " data-aos="fade-right" data-aos-delay="10"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"  >
                        <p className="text-white md:text-5xl lg:text-6xl font-bold " >
                            Gifts for <br /> <span className="text-sky"> all occasions</span>
                        </p>
                        <p className="text-white hidden md:block lg:block w-2/5 text-lg mt-2 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam, at vero consequatur maiores repudiandae distinctio voluptatibus incidunt deserunt ......</p>
                        <p className="text-white md:hidden lg:hidden lg:w-2/5 md:w-2/5 text-lg mt-2 mb-2">Lorem, ipsum dolor sit Voluptas quibusdam, at vero consequatur maiores   incidunt deserunt ......</p>
                        <Button name='Check More product'>
                            <FaShoppingCart className="" />
                        </Button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1573343960734-f3c3753a563f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="w-full lg:h-[650px]" />
                    <div className="absolute  transform -translate-y-1/2 md:top-32 top-48 md:left-32 lg:left-60 lg:right-10 lg:top-28 " data-aos="fade-right" data-aos-delay="10"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"  >
                        <p className="text-white md:text-5xl lg:text-6xl font-bold " >
                            Gifts for <br /> <span className="text-sky"> all occasions</span>
                        </p>
                        <p className="text-white hidden md:block lg:block w-2/5 text-lg mt-2 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam, at vero consequatur maiores repudiandae distinctio voluptatibus incidunt deserunt ......</p>
                        <p className="text-white md:hidden lg:hidden lg:w-2/5 md:w-2/5 text-lg mt-2 mb-2">Lorem, ipsum dolor sit Voluptas quibusdam, at vero consequatur maiores   incidunt deserunt ......</p>
                        <Button name='Check More product'>
                            <FaShoppingCart className="" />
                        </Button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;