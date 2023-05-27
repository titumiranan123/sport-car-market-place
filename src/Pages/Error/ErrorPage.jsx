/* eslint-disable react/prop-types */

import useTitle from "../../Hook/Usetitle";


const ErrorPage = () => {
    useTitle("Error")
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 shadow-lg card">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
            <p className="text-lg mb-2">We apologize for the inconvenience. An error occurred:</p>

            <p className="text-lg mt-4">Please try again later or contact support if the problem persists.</p>
        </div>
    );
};

export default ErrorPage;
