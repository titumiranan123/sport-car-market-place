import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hook/Usetitle";
import Swal from "sweetalert2";


const ToyUpdatepage = () => {
    const [objecttoy, setToy] = useState([])


    const [toyData, setToyData] = useState({
        picture_url: '',
        name: '',
        seller_name: '',
        seller_email: '',
        sub_category: '',
        price: '',
        rating: '',
        available_quantity: '',
        detail_description: ''
    });
    const singletoy = useLoaderData();
    useEffect(() => {
        singletoy.map(toy => setToy(toy))
    }, [singletoy])
    const { _id, name } = objecttoy;
    const handleChange = (e) => {
        setToyData({ ...toyData, [e.target.name]: e.target.value });
    };
    useTitle("Update Your Toy Information")
    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        // You can perform any necessary actions with the form data here
        (toyData);
        // Reset the form after submission
        setToyData({
            picture_url: '',
            name: '',
            seller_name: '',
            seller_email: '',
            sub_category: '',
            price: '',
            rating: '',
            available_quantity: '',
            detail_description: ''
        });
        fetch(`https://toy-server-market.vercel.app/toy/${_id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(toyData)
        })
            .then(res => res.json())
            .then(data => {
                (data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product has been Updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };

    return (
        <div className='bg-blue px-10'>
            <h2 className='text-center pt-5 text-xl font-bold text-white'>Update : {name}</h2>
            <form onSubmit={handleUpdateSubmit} className="max-w-full mx-auto  p-5  ">
                <div className="grid grid-col-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
                    <div className="mb-4">
                        <label htmlFor="picture_url" className="block mb-2  text-white font-medium">Picture URL of the toy:</label>
                        <input
                            type="text"
                            id="picture_url"
                            name="picture_url"
                            value={toyData.picture_url}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 text-blue border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-white font-medium">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={toyData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 text-blue border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="seller_name" className="block mb-2 text-white font-medium">Seller Name:</label>
                        <input
                            type="text"
                            id="seller_name"
                            name="seller_name"
                            value={toyData.seller_name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="seller_email" className="block mb-2 text-white font-medium">Seller Email:</label>
                        <input
                            type="email"
                            id="seller_email"
                            name="seller_email"
                            value={toyData.seller_email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border text-blue border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="sub_category" className="block mb-2 text-white font-medium">Sub-category:</label>
                        <select
                            id="sub_category"
                            name="sub_category"
                            value={toyData.sub_category}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2  border border-gray-300 rounded text-blue focus:outline-none focus:border-blue-500"
                        >
                            <option value="">-- Select Sub-category --</option>
                            <option value="Math Toys">Sport Car</option>
                            <option value="Language Toys">Police Car</option>
                            <option value="Science Toys">Regular Car</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="price" className="block mb-2 text-white font-medium">Price:</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={toyData.price}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 text-blue border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="rating" className="block mb-2 text-white font-medium">Rating:</label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            value={toyData.rating}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 text-blue border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="available_quantity" className="block mb-2 text-white font-medium">Available Quantity:</label>
                        <input
                            type="number"
                            id="available_quantity"
                            name="available_quantity"
                            value={toyData.available_quantity}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 text-blue border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                </div>
                <div className="mb-4">
                    <label htmlFor="detail_description" className="block mb-2 text-white font-medium">Detail Description:</label>
                    <textarea
                        id="detail_description"
                        name="detail_description"
                        value={toyData.detail_description}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="hover:bg-pink shadow-2xl text-white px-4 py-2 rounded bg-sky hover:shadow-2xl"
                >
                    Submit
                </button>
            </form>
        </div>
    )
};

export default ToyUpdatepage;