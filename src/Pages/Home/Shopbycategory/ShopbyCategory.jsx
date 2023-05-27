
import { NavLink } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';

const ShopbyCategory = () => {
    return (
        <div className='text-white px-10'>
            <h2 className="text-4xl font-bold mb-8 text-center text-white">Choose Any Category</h2>
            <nav className='flex flex-wrap gap-2'>
                <NavLink to={'/'} className={`border   font-bold rounded-md py-1 px-4 hover:text-sky  hover:bg-blue  underline bg-blue text-sky `} > All Category</NavLink>
                <NavLink to={'/sport-car'} className={({ isActive }) => `border  text-white font-bold rounded-md py-1 px-4 hover:text-sky hover:bg-blue ${isActive ? "underline text-sky " : ''}`} > Sport Car</NavLink>
                <NavLink to={'/police-car'} className={({ isActive }) => ` border  text-white font-bold rounded-md py-1 px-4 hover:text-sky hover:bg-blue ${isActive ? "underline text-sky " : ''}`} > Police Car</NavLink>
            </nav>
            <hr className='mt-4 border-2 border-sky' />

        </div>
    );
};

export default ShopbyCategory;