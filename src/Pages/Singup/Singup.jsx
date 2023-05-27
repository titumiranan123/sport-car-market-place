import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Porviders/Authprovider";
import useTitle from "../../Hook/Usetitle";


const Singup = () => {
    const { createUser, updateUser } = useContext(Authcontext)
    const navigate = useNavigate();
    useTitle("Sing up page")

    const submitHandal = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        (email, password, name, photo)
        createUser(email, password)
            .then(res => {
                const user = res.user;
                (res)
                updateUser(user, name, photo)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        (err)
                    })
                navigate('/login')
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sing Up</h1>
                </div>
                <form onSubmit={submitHandal}>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered required" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button type="" className="btn btn-primary">Sing Up</button>
                            </div>
                            <div>
                                <p>All Ready have an Account <Link className="underline text-blue" to='/login'>Login Now</Link ></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Singup;