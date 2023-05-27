import { useContext, useEffect, useState } from "react";
import Button from "../../../Shared/Button.jsx/Button";
import { FaShoppingCart, FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { Authcontext } from "../../../../Porviders/Authprovider";

const Sportcar = () => {
    const [sportcar, setSportCar] = useState([])
    const { user } = useContext(Authcontext)
    useEffect(() => {
        fetch(`https://toy-server-market.vercel.app/sport-car`)
            .then(res => res.json())
            .then(data => setSportCar(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 px-10 ">
            {
                sportcar.map(sc => <div className="" key={sc._id}>
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

export default Sportcar;