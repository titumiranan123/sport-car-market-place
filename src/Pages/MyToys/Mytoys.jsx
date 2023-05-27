/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Porviders/Authprovider";
import Button from "../Shared/Button.jsx/Button";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hook/Usetitle";


const Mytoys = () => {
    const [toys, setToys] = useState([])
    const { user } = useContext(Authcontext)
    useTitle("My Toys")
    const handalDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-server-market.vercel.app/alltoys/${id}`, {
                    method: "delete",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaing = toys.filter(t => t._id !== id)
                            setToys(remaing)
                        }
                    }
                    )
            }
        })


    }
    const url = `https://toy-server-market.vercel.app/alltoys?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return (
        <div className="bg-blue px-10  py-20">
            <h2 className='text-center pt-5 text-xl font-bold text-white'> Your  Products</h2>
            {
                toys.map(t => <div key={t._id}>
                    <div className=" ">
                        <div className="card card-side bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                            <figure><img className="h-48 rounded-xl" src={t.picture_url} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{t.name}</h2>
                                <p>Price : ${t.price}</p>
                                <p className="flex">Rating : {t.rating} <FaStar className="text-blue text-[8px]" /></p>
                            </div>
                            <div className="card-actions flex mb-3 lg:flex-col md:flex-col justify-center md:me-10 md:ms-auto lg:ms-auto lg:me-10 ">
                                <Link to={`/update/${t._id}`} >
                                    <Button name={'Update'}></Button>
                                </Link>                                <button onClick={() => handalDelete(t._id)}> <Button name={'Delete'}></Button> </button>
                            </div>
                        </div>

                    </div>
                </div>)
            }

        </div>
    );
};

export default Mytoys;