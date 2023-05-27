import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/Logo/logo.png';
import { HiMenu, HiX } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/Ai";
import { useContext, useState } from 'react';
import { Authcontext } from '../../../Porviders/Authprovider';

const Navbar = () => {
    const [open, setopen,] = useState(true)
    const { logout, user, setLodder } = useContext(Authcontext);
    (user)
    const navigate = useNavigate();
    const handalLogout = () => {
        logout()
            // eslint-disable-next-line no-unused-vars
            .then(res => {
                setLodder(true)
                navigate('/login')
            })
            .then(err => {
                (err)
            })
    }
    return (
        <div className='flex items-center px-16 relative bg-blue  p-2'>
            <Link to='/'>
                <img className='h-10 w-10 rounded-full bg-pink' src={logo} alt="no img" />
            </Link>
            <div className={`text-xl font-semibold md:mx-auto ${open ? 'hidden' : ''} lg:flex lg:static absolute flex lg:flex-row flex-col gap-3 top-10 right-4 bg-sky-700 z-10 bg-blue text-white`} style={{ padding: '50px' }}  >

                <NavLink to={'/'} className={({ isActive }) => `${isActive ? "underline text-sky " : ''}`} > Home</NavLink>
                <NavLink to={'/alltoys'} className={({ isActive }) => `${isActive ? "underline text-sky " : ''}`} > All Toy</NavLink>
                {user?.email &&
                    <NavLink className={({ isActive }) => `${isActive ? "underline text-sky " : ''}`} to={`/mytoys`} > My Toys</NavLink>
                }
                {user?.email &&
                    <NavLink className={({ isActive }) => `${isActive ? "underline text-sky " : ''}`} to={'/addtoy'} > Add A Toys</NavLink>
                }
                <NavLink to={'/blogs'} className={({ isActive }) => `${isActive ? "underline text-sky " : ''}`} > Blog</NavLink>

                <div className='lg:hidden'>
                    {
                        user ?
                            <><Link className='rounded border py-2 px-4' onClick={handalLogout} to={'/'}>Log out</Link><img title={`${user.displayName}`} className='text-white border rounded-full  border-white h-12 w-12 mt-4 ' src={user?.photoURL} alt="" /> </> : <NavLink className={({ isActive }) => `rounded border py-2 px-4 ${isActive ? "underline text-sky " : ''}`} to={'/login'}>Login</NavLink>
                    }
                </div>
            </div>
            <div className='text-xl font-semibold lg:flex  gap-2 hidden items-center
            ' >
                {
                    user
                        ? <> <Link className='rounded border py-2 px-4 text-sky' onClick={handalLogout} to={'/'}>Log out</Link> <Link to={'/'}> <img title={`${user.displayName}`} className='text-white border rounded-full  border-white h-12 w-12' src={user.photoURL} alt="" /></Link> </>
                        : <><Link className='text-white' to={'/login'}>Login</Link> <AiOutlineUser className='text-white' /> </>
                }


            </div>
            <img src={user.photoUrl} className='rounded-full' alt="" />
            <div className='ms-auto md:text-sky  lg:hidden font-semibold text-4xl bg-pink text-blue px-5 '>
                <button onClick={() => setopen(!open)}>
                    {
                        open ? <HiMenu /> : <HiX />
                    }
                </button>
            </div>
        </div>
    );
};

export default Navbar;