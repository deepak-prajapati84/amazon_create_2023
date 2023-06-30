import React from "react";
import './home.css';
import img1 from "../sliders/imgs/2.jpg"
import img2 from "../sliders/imgs/3.jpg"
import img3 from "../sliders/imgs/4.jpg"
import img4 from "../sliders/imgs/5.jpg"
import img5 from "../sliders/imgs/6.jpg" 


function Home() {
    return (
        <>
            <header className="">
                <div className="d_header_top"></div>
                <div className="d_header_bottom"></div>
            </header>
            <div className="d_main">
                <div className="d_main_top position-relative">
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
                    <div className="position-absolute d_main_bottom">
                            <div className="row d_main_bottom_1 main_d_bottom">
                                <div className="col">A</div>
                                <div className="col">B</div>
                                <div className="col">C</div>
                                <div className="col">D</div>
                            </div>
                            <div className="row d_main_bottom_2 main_com_margin main_d_bottom">
                                <div className="col">A</div>
                                <div className="col">B</div>
                                <div className="col">C</div>
                                <div className="col">D</div>
                            </div>
                            <div className="row d_main_bottom_3 main_d_bottom main_com_margin">
                                <div className="col">A</div>
                                <div className="col">B</div>
                                <div className="col">C</div>
                            </div>
                            <div className="d_main_bottom_4 main_com_margin"></div>
                            <div className="d_main_bottom_5 d_main_com_5_6"></div>
                            <div className="d_main_bottom_6 d_main_com_5_6"></div>
                            <div className="d_main_bottom_7 main_d_bottom main_com_margin"></div>
                            <div className="d_main_bottom_8 d_main_com_5_6"></div>
                            <div className="d_main_bottom_9 d_main_com_5_6"></div>
                            <div className="d_main_bottom_10 main_com_margin"></div>
                            <div className="d_main_bottom_11 main_d_bottom main_com_margin"></div>
                            <div className="d_main_bottom_12 d_main_com_5_6"></div>
                            <div className="d_main_bottom_13 main_com_margin"></div>
                            <div className="d_main_bottom_14 main_d_bottom main_com_margin"></div>
                            <div className="d_main_bottom_15 d_main_com_5_6"></div>
                            <div className="d_main_btm"></div>
                    </div>
                </div>
            </div>
            <footer></footer>
        </>
    )
}

export default Home;