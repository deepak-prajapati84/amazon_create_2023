import React from "react";
import './home.css';
import img1 from '../imgs/sliders/2.jpg'
import img2 from '../imgs/sliders/3.jpg'
import img3 from '../imgs/sliders/4.jpg'
import img4 from '../imgs/sliders/5.jpg'
import img5 from '../imgs/sliders/6.jpg'


function Home() {
    return (
        <>
            <header className="">
                <div className="d_header_top"></div>
                <div className="d_header_bottom"></div>
            </header>
            <div className="d_main">
                <div className="d_main_carusel">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img1} className="d-block img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={img2} className="d-block img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={img3} className="d-block img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={img4} className="d-block img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={img5} className="d-block img-fluid" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev btn_icon" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next btn_icon m-0" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="d_main_2 w-100">
                    
                    </div>
                </div>
            </div>
            <footer></footer>
        </>
    )
}

export default Home;