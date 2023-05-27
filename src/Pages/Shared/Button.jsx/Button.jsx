/* eslint-disable react/prop-types */


// eslint-disable-next-line no-unused-vars
const Button = ({ name, children }) => {
    return (
        <button className="text-blue py-2 px-6 bg-sky hover:bg-pink shadow-lg shadow-sky hover:shadow-pink hover:shadow-2xl rounded-lg flex items-center gap-5 font-semibold text-lg">
            {name}
            {children}
        </button>
    );
};

export default Button;