import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Header = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div>
            <Carousel
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div>
                    <img src="https://img.freepik.com/free-vector/relocation-another-city-truck-with-freight_107791-2720.jpg?w=740&t=st=1684402102~exp=1684402702~hmac=1ba30da3119408064e9b764c0faad9bb86b2dccdb33296a1664b49988de5a5eb" alt="" />
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/relocation-another-city-truck-with-freight_107791-2720.jpg?w=740&t=st=1684402102~exp=1684402702~hmac=1ba30da3119408064e9b764c0faad9bb86b2dccdb33296a1664b49988de5a5eb" alt="" />

                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/relocation-another-city-truck-with-freight_107791-2720.jpg?w=740&t=st=1684402102~exp=1684402702~hmac=1ba30da3119408064e9b764c0faad9bb86b2dccdb33296a1664b49988de5a5eb" alt="" />

                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/relocation-another-city-truck-with-freight_107791-2720.jpg?w=740&t=st=1684402102~exp=1684402702~hmac=1ba30da3119408064e9b764c0faad9bb86b2dccdb33296a1664b49988de5a5eb" alt="" />

                </div>
            </Carousel>
        </div>
    );
};

export default Header;