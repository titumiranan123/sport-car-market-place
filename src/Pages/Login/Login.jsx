import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Porviders/Authprovider";
import useTitle from "../../Hook/Usetitle";
import Swal from "sweetalert2";


const Login = () => {
    const { singin, loginwithGoogle } = useContext(Authcontext);
    useTitle("Login page")
    const navigate = useNavigate()
    const submitHandal = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;

        const password = form.password.value;
        (email, password)
        singin(email, password)
            // eslint-disable-next-line no-unused-vars
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Success',
                })
                navigate('/')
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Worng Password!',
                })
                console.log(err)
            })
    }

    const singwithGoogle = () => {
        loginwithGoogle()
            // eslint-disable-next-line no-unused-vars
            .then(res => {
                navigate('/')
            })
            .catch(err => {
                (err)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <form onSubmit={submitHandal}>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="" className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p>All Ready have an Account <Link className="underline text-blue-500" to='/singup'>Singup Now</Link ></p>
                            </div>
                            <div className="text-center">
                                <button onClick={singwithGoogle} className="text-white bg-blue rounded-xl py-1 px-5">Google</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;