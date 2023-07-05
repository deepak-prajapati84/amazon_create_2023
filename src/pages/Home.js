import React from "react";
import './home.css';
import img1 from "../sliders/imgs/2.jpg"
import img2 from "../sliders/imgs/3.jpg"
import img3 from "../sliders/imgs/4.jpg"
import img4 from "../sliders/imgs/5.jpg"
import img5 from "../sliders/imgs/6.jpg"
import logo from '../sliders/imgs/2.png'
import { Link } from "react-router-dom";
import imgbottom from '../sliders/imgs/imgs1.jpg';


function Home() {
    return (
        <>
            <header className="">
                <div className="d_header_top p-1 " >
                    <button className="btn h-100" style={{ 'width': '9%' }}>
                        <img src={logo} className="img-fluid align-baseline logo_img w-100" />
                    </button>
                    <button className="btn h-100 lh-1 p-0" style={{ 'width': '12%' }}>
                        Hello
                        <span className="fw-bolder d-block">Select <span className="">your</span> <span className="">address</span></span>
                    </button>
                    <form className="d-inline-block bg-white ms-2 h-75 w-50 text-white">C</form>
                    <button className="btn h-100 " style={{ 'width': '4%' }}>D</button>
                    <button className="btn h-100 " style={{ 'width': '10%' }}>e</button>
                    <button className='btn h-100 ' style={{ 'width': '5%' }}>E</button>
                    <button className="btn h-100" style={{ 'width': '5%' }}>F</button>
                </div>
                <div className="d_header_bottom ">
                    <ul className="ms-2 nav float-start">
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-bold"  to="#">
                                All
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Amazon miniTV</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Sell</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white">Best Sellers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white"  to="#">Today's Deals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white"  to="#">Mobiles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Customer Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">New Releases</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white">Prime</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white "  to="#">Electronics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Home & Kitchen</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white">Amazon Pay</Link>
                        </li>
                    </ul>

                    <Link className="p-0 m-0 float-end">
                        <img src={imgbottom} alt="" />
                    </Link>
                    <ul className="nav ms-2 float-start d-none">
                        <li className="nav-item">
                            <Link className="nav-link text-white">Amazon Pay</Link>
                        </li>
                    </ul>
                </div>
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
                        <div className="d_main_bottom_4 main_com_margin">
                            <div>
                                <h4 className='d-inline'>Today's Deals</h4>
                                <button type="button" className='btn btn-link cmn_button_link'>see all deals</button>
                            </div>
                            <div id="carouselExample2" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div className='img_Cont row'>
                                            <div className="col">2</div>
                                            <div className="col">2</div>
                                            <div className="col">2</div>
                                            <div className="col">2</div>
                                            <div className="col">2</div>
                                            <div className="col">2</div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className='img_Cont row'>
                                            <div className="col">3</div>
                                            <div className="col">3</div>
                                            <div className="col">3</div>
                                            <div className="col">3</div>
                                            <div className="col">3</div>
                                            <div className="col">3</div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className='img_Cont row'>
                                            <div className="col">1</div>
                                            <div className="col">1</div>
                                            <div className="col">1</div>
                                            <div className="col">1</div>
                                            <div className="col">1</div>
                                            <div className="col">1</div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev button_next_prev rounded-end" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next button_next_prev rounded-start" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                                    <span class="carousel-control-next-icon " aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="d_main_bottom_5 d_main_com_5_6">
                            <div id="carouselExample3" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div className='img_Cont2'>A</div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className='img_Cont2'>B</div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className='img_Cont2'>C</div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
                                    <span class="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="d_main_bottom_6 d_main_com_5_6">
                            <div id="carouselExample4" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div className='img_Cont2'>A</div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className='img_Cont2'>B</div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className='img_Cont2'>C</div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample4" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample4" data-bs-slide="next">
                                    <span class="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="d_main_bottom_7 main_d_bottom main_com_margin"></div>
                        <div className="d_main_bottom_8 d_main_com_5_6">
                            <div id="carouselExample5" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div className='img_Cont2'>A</div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className='img_Cont2'>B</div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className='img_Cont2'>C</div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample5" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample5" data-bs-slide="next">
                                    <span class="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
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