
import { Link, useLoaderData } from "react-router-dom";
import Button from "../Shared/Button.jsx/Button";
import { FaShoppingCart } from "react-icons/fa";
import { Authcontext } from "../../Porviders/Authprovider";
import { useContext } from "react";
import useTitle from "../../Hook/Usetitle";


const AllToys = () => {
    const { user } = useContext(Authcontext)
    useTitle("All Toys")
    const toys = useLoaderData();
    return (
        <div className="px-10 overflow-x-auto">
            <h1 className="text-2xl font-bold mb-4">All Toys</h1>
            <table className="min-w-full divide-y border-collapse text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">Seller</th>
                        <th className="px-6 py-3">Toy Name</th>
                        <th className="px-6 py-3">Sub-category</th>
                        <th className="px-6 py-3">Price</th>
                        <th className="px-6 py-3">Available Quantity</th>
                        <th className="px-6 py-3">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {toys.map((toy) => (
                        <tr key={toy.id}>
                            <td className="px-6 py-3">{toy.seller_name}</td>
                            <td className="px-6 py-3">{toy.name}</td>
                            <td className="px-6 py-3">{toy.sub_category}</td>
                            <td className="px-6 py-3">{toy.price}</td>
                            <td className="px-6 py-3">{toy.available_quantity}</td>
                            <td className="px-6 py-3">
                                <Link to={user ? `/toy/${toy._id}` : '/login'}>
                                    <Button name={'View Details'}>
                                        <FaShoppingCart />
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;
