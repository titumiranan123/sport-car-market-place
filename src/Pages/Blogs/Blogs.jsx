import useTitle from "../../Hook/Usetitle";


const Blogs = () => {
    useTitle("Blogs")
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className="mb-2">
                    An access token is a credential used to authenticate and authorize access to protected resources. It is a JSON web token (JWT) that contains user information and permissions. Access tokens are short-lived and stored on the client-side, typically in memory or browser storage.
                </p>
                <p className="mb-2">
                    Refresh tokens are long-lived credentials used to obtain new access tokens. They are securely stored on the client-side and sent to the server when the access token expires. Refresh tokens enable seamless user sessions and avoid frequent reauthentication.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Compare SQL and NoSQL databases?</h2>
                <p className="mb-2">
                    SQL databases use a structured schema and SQL language for data manipulation. They enforce ACID properties and are suitable for complex data relationships.
                    ex : MySQL, PostgreSQL
                </p>
                <p className="mb-2">
                    NoSQL databases store data in a flexible format and use various query languages or APIs. They prioritize scalability and performance over strict consistency and are ideal for unstructured or rapidly evolving data.
                    ex: MongoDB, Redis
                </p>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">What is express js? What is Nest JS</h2>
                <p className="mb-2">
                    Express.js is a minimal and flexible web application framework for Node.js. It handles routing, HTTP requests, and middleware, making it popular for building server-side applications.
                </p>
                <p className="mb-2">
                    Nest.js is a progressive Node.js framework built on top of Express.js. It follows an organized and modular approach inspired by Angular. Nest.js enhances Express.js with additional features and supports TypeScript out of the box.
                </p>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">What is MongoDB aggregate and how does it work?</h2>
                <p className="mb-2">
                    The aggregation pipeline allows you to perform complex operations that will allow any range of insights into your collections
                </p>
                <p className="mb-2">
                    Aggregation pipelines are collections of stages that, combined with the MongoDB query syntax, will allow you to obtain an aggregated result.

                    Before we dive into the code, let's understand what the aggregation pipeline itself does and how it works. In the aggregation pipeline, you list out a series of instructions in a "stage." For each stage that's defined, MongoDB executes them one after another in order to give a finalized output you're able to use
                </p>
            </div>
        </div>
    );
};

export default Blogs;