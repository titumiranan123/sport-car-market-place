import { useState } from "react";
import { FaArrowCircleLeft, FaHome, FaRegArrowAltCircleDown, FaShoppingBag, FaSlash, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Button from "../Shared/Button.jsx/Button";
import Swal from 'sweetalert2'
import useTitle from "../../Hook/Usetitle";


const Toydetails = () => {
    const [count, setcount] = useState(0)
    useTitle("Toy Details")
    const increse = () => {
        const total = count + 1;
        setcount(total)
    }
    const deincrese = () => {
        const total = count - 1;
        setcount(total)
    }
    const addShopingCart = () => {

        Swal.fire({
            icon: 'success',
            title: 'Success !!!',
            text: 'You have added Product to your shopping cart!',
        })
    }
    const navigate = useNavigate();
    const toys = useLoaderData();

    return (
        <div className="bg-blue px-10">
            <div className="">
                <nav className="flex justify-between items-center">
                    <div>
                        <button onClick={() => navigate(-1)} className="text-white"><FaArrowCircleLeft /></button >
                    </div>
                    <div className="flex gap-2 items-center">
                        <Link to={'/'} ><FaHome className="text-white" /></Link>
                        <FaSlash className="text-white text-2xl" />
                        <p className="text-white">Gift Your Child</p>
                    </div>
                </nav>
                <div className="mt-32">
                    {
                        toys.map(toy =>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:h-[500px]" key={toy._id}>
                                <div className="order-2 h-56">
                                    <img className="h-[300px] rounded-lg" src={toy.picture_url} alt="" />
                                </div>
                                <div className="order-1">
                                    <div className="flex gap-5">
                                        <Rating
                                            initialRating={`${toy.rating}`}
                                            readonly
                                            emptySymbol={<p className="text-yellow"><FaStarHalf /></p>}
                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<p className="text-yellow"><FaStar /></p>}
                                        />
                                        <hr />
                                        <p className="text-white">{toy.rating} Reviews</p>
                                        <hr className="text-white" />
                                        <p className="text-white flex gap-2">Write A Review  <FaRegArrowAltCircleDown /></p>
                                    </div>
                                    <h2 className="text-xl font-bold text-white">Product Details : </h2>
                                    <p className="text-white font-semibold text-lg ">{toy.name}</p>
                                    <p className="text-white font-semibold text-lg ">Price : ${toy.price}</p>
                                    <p className="text-white" >Seller Name : {toy.seller_name}</p>
                                    <div>
                                        <p className="text-white font-semibold text-lg">Quantity</p>
                                        <div className="flex mt-5 gap-5 border-2 rounded-lg border-sky px-4 py-2 text-white w-1/2 justify-center mb-5">
                                            <button onClick={increse} className="text-lg">+</button>
                                            <span>{count}</span>
                                            <button onClick={deincrese} className="text-lg">-</button>
                                        </div>
                                        <button onClick={addShopingCart}>

                                            <Button name={'Add to Cart'}>
                                                <FaShoppingBag />
                                            </Button>
                                        </button>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
            <div className="border-2 p-10 border-sky">
                <nav className="flex gap-4">
                    <button onClick={''} className="text-xl font-semibold text-white hover:text-white">Description</button>
                    <button className="text-xl font-semibold text-white hover:text-white">Review</button>
                </nav>
                <div className="mt-10">
                    <h3 className="text-xl font-bold text-white">Write A Review</h3>
                    <div className="mt-5">
                        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-white">Write Your Name</label>
                        <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="textbox" className="block mb-2 text-sm font-medium  text-white">Review</label>
                        <textarea type="text" id="textbox" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        </textarea>
                        <button type="submit" className="py-2 px-4 bg-sky shadow-lg hover:bg-pink hover:shadow-2xl mt-5 rounded-md">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toydetails;