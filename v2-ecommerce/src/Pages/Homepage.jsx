import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Homepage.css"
// import Slider from '../Components/slider';


export default function Homepage() {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <main>
            <div className="hero">
                <div className="hero-content">
                    <h1>Welcome To The Thrift</h1>
                    <p>Shop to your hearts content</p>
                </div>
            </div>

            <section className="index-navsection">
                <div className="content-column">
                    <div className="index-sectionContent-right">
                        <div className="index-center_nav_section">
                            <h1>Why shop with us</h1>
                            <p>
                                Why shop with ThriftTech, we offer amazing deals on apple products so that our customers can save money. We believe that we can help our community by offering deals no one can resist while also being satisfied with our customer service.
                            </p>
                            <a href="./products">
                                <button>View Products</button>
                            </a>
                        </div>
                    </div>
                    <img src="Public/Img/HomepageImg2.jpg" alt="index-img1" id="index-img1" />
                </div>
            </section>

            <section className="index-section-middle">
                <div className="content-column-2">
                    <img src="Public/Img/Apple-Logo.jpg" alt="index-img2" id="index-img2" />
                    <div className="index-sectionContent-left">
                        <h2>Our Trusted Companion</h2>
                        <p>
                            Our products are verified and come straight from Apple. Our products are not only dependable but they are sturdy and long lasting.
                        </p>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.apple.com">
                            <button>View Apple</button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Slider Section */}
            <section className="slider-section">
                {/* <h2>Featured Products</h2> */}
                <Slider {...settings}>
                    <div>
                        <img src="Public/Img/applelogo.jpg" alt="Product 1" />
                    </div>
                    <div>
                        <img src="Public/Img/applelogo2.png" alt="Product 2" />
                    </div>
                    <div>
                        <img src="Public/Img/applelogo3.png" alt="Product 3" />
                    </div>
                </Slider>
            </section>
        </main>
    );
}


