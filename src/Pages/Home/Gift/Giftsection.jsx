
import { FaShoppingBag } from 'react-icons/fa';
import pic from '../../../assets/Logo/gift-removebg-preview.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Authcontext } from '../../../Porviders/Authprovider';
const Giftsection = () => {
    const { user } = useContext(Authcontext)
    return (
        <div className="px-10 mt-5">
            <div className="bg-pink rounded-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-2">
                <div className='mt-auto mb-auto'>
                    <p className="text-xl text-blue">Gifts.</p>
                    <p className="text-xl text-white">Gifts for</p>
                    <p className="text-sm text-blues2w">All occasions</p>
                    <p className='text-sm text-blue '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti recusandae natus porro nesciunt pariatur, totam ipsum doloribus ducimus eius consequuntur, in dolor incidunt?</p>
                    <Link to={`${user ? '/alltoys' : '/login'}`}>
                        <button className="text-white py-2 px-6 bg-blue mt-5 hover:bg-sky shadow-lg shadow-blue hover:shadow-sky hover:shadow-2xl rounded-lg hover:text-blue flex items-center gap-5 font-semibold text-lg">
                            ShowMore Product <FaShoppingBag />
                        </button>
                    </Link>
                </div>
                <div>
                    <img src={pic} alt="" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default Giftsection;