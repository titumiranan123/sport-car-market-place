import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-blue px-10 pb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 pt-10">
                <div>
                    <p className="text-2xl text-sky font-bold">
                        Shopping Now
                    </p>
                    <h1 className="text-lg text-white font-semibold">Call Take More Info
                        <span className="text-sky block">+ 058323664564</span> </h1>
                    <p className="text-white mt-2 text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dignissimos sit nam hic aliquid ..... </p>
                </div>
                <div>
                    <h1 className="text-xl text-white font-semibold">Shop</h1>
                    <p className="text-white mt-2 text-sm"> FAQ </p>
                    <p className="text-white mt-2 text-sm"> Term & Condition </p>
                    <p className="text-white mt-2 text-sm"> Delivery Information </p>
                    <p className="text-white mt-2 text-sm"> About us </p>
                </div>
                <div>
                    <h1 className="text-xl text-white font-semibold">CUSTOMER</h1>
                    <p className="text-white mt-2 text-sm"> Contact us </p>
                    <p className="text-white mt-2 text-sm"> Returns </p>
                    <p className="text-white mt-2 text-sm"> site map </p>
                    <p className="text-white mt-2 text-sm"> Affiliate </p>
                </div>
                <div>
                    <h1 className="text-xl text-white font-semibold">ACCOUNT</h1>
                    <p className="text-white mt-2 text-sm"> Account </p>
                    <p className="text-white mt-2 text-sm"> Order History </p>
                    <p className="text-white mt-2 text-sm"> Wish List </p>
                    <p className="text-white mt-2 text-sm"> Newsletter </p>
                </div>
            </div>
            <div className="mt-9">
                <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-3">
                    <div>
                        <p className="text-white mt-2 text-sm">Powered By OpenCart gift © 2023</p>
                    </div>
                    <div className="flex gap-4">
                        <FaFacebook className=" text-white" />
                        <FaYoutube className="text-white" />
                        <FaTwitter className="text-white" />
                        <FaInstagram className="text-white" />

                    </div>
                    <div className="flex gap-3">
                        <p className="text-sm text-white">
                            abouts
                        </p>
                        <p className="text-sm text-white">
                            career
                        </p>
                        <p className="text-sm text-white">
                            support
                        </p>
                        <p className="text-sm text-white">
                            Information
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;