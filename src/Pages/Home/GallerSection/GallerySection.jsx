

const GallerySection = () => {
    // Sample image URLs
    const images = [
        'https://images.unsplash.com/photo-1533127321739-d5dc53c221c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1573343960734-f3c3753a563f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1523729081326-a85565e57e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        'https://images.unsplash.com/photo-1523676060187-f55189a71f5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',

        // Add more image URLs here
    ];

    return (
        <div className="p-20 ">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">Gallery Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                {images.map((imageUrl, index) => (
                    <div className="relative  overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 " key={index} >
                        <img data-aos='fade-right' data-aos-duration='1000' src={imageUrl} alt={`Image ${index + 1}`} className="object-cover object-center w-full h-[250px] " />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                            <button className="bg-white text-blue hover:text-sky px-4 py-2 rounded-lg shadow-lg hover:bg-blue font-bold transition-colors duration-300 z-10">View</button>
                            <div className="object-cover z-0 hover:bg-sky opacity-40  absolute object-center w-full h-full ">

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GallerySection;
