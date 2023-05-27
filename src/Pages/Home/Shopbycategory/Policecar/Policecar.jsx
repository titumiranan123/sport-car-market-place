import { Link, useLoaderData } from "react-router-dom";
import Button from "../../../Shared/Button.jsx/Button";
import { FaShoppingCart, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import { useContext } from "react";
import { Authcontext } from "../../../../Porviders/Authprovider";

const Policecar = () => {
    const data = useLoaderData();
    const { user } = useContext(Authcontext)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 px-10 ">
            {
                data.map(sc => <div className="" key={sc._id}>
                    <div className="card w-72 mt-10  bg-base-100 shadow-xl h-[450px] border-sky rounded-3xl border hover:bg-white hover:text-blue rounded-b-xl">
                        <figure><img className="h-[200px]" src={sc.picture_url} /></figure>
                        <div className="card-body bg-blue hover:bg-white hover:text-blue text-white rounded-b-xl">
                            <h2 className="card-title">
                                {sc.name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Price : ${sc.price} </p>
                            <Rating
                                initialRating={`${sc.rating}`}
                                readonly
                                emptySymbol={<p className="text-yellow"><FaStarHalf /></p>}
                                placeholderSymbol={<FaStar />}
                                fullSymbol={<p className="text-yellow"><FaStar /></p>}
                            />
                            <div className="card-actions ">
                                <Link to={user ? `/toy/${sc._id}` : '/login'}>
                                    <Button name={'View Details'}>
                                        <FaShoppingCart />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Policecar;