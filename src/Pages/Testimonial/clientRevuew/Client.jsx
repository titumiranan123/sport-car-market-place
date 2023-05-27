import { FaReadme } from "react-icons/fa";
import Button from "../../Shared/Button.jsx/Button";
import { useContext } from "react";
import { Authcontext } from "../../../Porviders/Authprovider";


const Client = () => {
    const { user } = useContext(Authcontext)
    return (
        <div>
            <div className="card w-96  bg-base-100 relative shadow-xl image-full">
                <figure><img src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Awesome Place For Market</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore voluptas reiciendis.</p>
                    <div className="absolute top-0 -left-1">
                        <img className="rounded-full h-10 w-10" src={user?.photoURL} alt="" />
                    </div>
                    <div className="card-actions justify-end">
                        <Button name={'View Review'}> <FaReadme />  </Button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;