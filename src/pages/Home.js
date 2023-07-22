import './home.css';
import img1 from "../sliders/imgs/2.jpg"
import img2 from "../sliders/imgs/3.jpg"
import img3 from "../sliders/imgs/4.jpg"
import img4 from "../sliders/imgs/5.jpg"
import img5 from "../sliders/imgs/6.jpg"
import logo from '../sliders/imgs/2.png'
import primeimg from '../sliders/imgs/prime_img.jpg';
import { Link } from "react-router-dom";
import imgbottom from '../sliders/imgs/imgs1.jpg';
import Flag from "react-world-flags";



function Home() {

    let handleScroll = () => {
        console.log("ONOKJKSDJSH----->", window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);


    return (
        <>

            <div className="modal p-0 m-0 header_modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="p-0 m-0 modal-dialog modal-dialog-scrollable modal_Op">
                    <div className="modal-content">
                        <div className="modal-header text-white mhclr">
                            <h1 className="modal-title fw-bold ms-4 fs-5" id="exampleModalLabel">Hello, sign in</h1>
                            <button type="button" className="border fs-4 btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-0 m-0">
                            <h5 className="mt-4 ms-5">Trending</h5>
                            <ul className="nav flex-column mhhover">
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Best Sellers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">New Releases</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Movers and Shakers</Link>
                                </li>
                            </ul>
                            <hr />

                            <h5 className="ms-3">Digital Content And Devices</h5>
                            <ul className="nav  flex-column mhhover">
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Best Sellers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">New Releases</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Movers and Shakers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Movers and Shakers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Movers and Shakers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Movers and Shakers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Movers and Shakers</Link>
                                </li>
                            </ul>
                            <hr />

                            <h5 className="ms-3">Digital Content And Devices</h5>
                            <ul className="nav  flex-column mhhover">
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Best Sellers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">New Releases</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Movers and Shakers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Movers and Shakers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Movers and Shakers</Link>
                                </li>
                            </ul>
                            <hr />

                            <h5 className="ms-3">Digital Content And Devices</h5>
                            <ul className="nav flex-column mhhover">
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Best Sellers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">New Releases</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Movers and Shakers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Movers and Shakers</Link>
                                </li>

                            </ul>
                            <hr />

                            <h5 className="ms-3">Digital Content And Devices</h5>
                            <ul className="nav  flex-column mhhover">
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Best Sellers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">New Releases</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Movers and Shakers</Link>
                                </li>
                            </ul>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-5 modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content mt-5 w-75 offset-4 ">
                        <div className="modal-body">
                            <Link to='#'>
                                <img className='img-fluid' src={primeimg} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal w-25 p-0 m- mt-4 modal_header_contr " id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                <div className=" modal-dialog modal-sm header_modal_margin">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Default radio
                                </label>
                            </div>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Default radio
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        Default checked radio
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Default radio
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Default radio
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Default radio
                                    </label>
                                </div>
                                <div className='modal-footer p-0 m-0'>
                                    <p> <Flag code='in' className="me-3" height={16} />You are shopping on Amazon.in</p>
                                    <Link to="#" className="btn text-primary p-0 m-0 me-5">Change country/region</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal w-100 p-0 m-0 header_modal_sign_in" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
                <div className=" modal-dialog">
                    <div className="modal-content header_sign_cont">
                        <div className="modal-header text-center d-block p-0 m-3">
                            <button className='btn ps-5 pe-5 w-50 mb-1  text-primary bg-info '>Sign in</button>
                            <p className='p-0 m-0'>New Customer? <Link className='ms-1 btn p-0 m-0' to="#">Start here</Link> </p>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-6 ">
                                    <ul className="nav flex-column">
                                        <h6>Your List</h6>
                                        <li className="nav-item">
                                            <Link className="nav-link p-0"  href="#">Create a Wish List</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link p-0" href="#">Wish From Any Website</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link p-0" href="#">Baby Wishlist</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link p-0">Discover Your Style</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link p-0">Explore Showroom</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 p-0 m-0">
                                    <h6>Your Accounts</h6>
                                    <ul className="nav p-0 m-0 flex-column">
                                        <li className="nav-item ">
                                            <Link className="nav-link p-0" href="#">Your Account</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link p-0" href="#">Your Order</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link p-0" href="#">Your Wish List</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link p-0">Your Recommendations</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link p-0">Your Prime Membership</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link p-0">Your Recommendations</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link p-0">Your Prime Video</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link p-0">Your Subscribe & Save Items</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link p-0">Memberships & Subscriptions</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link p-0">Your Seller Account</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link p-0">Manage Your Content and Devices</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link p-0">Your Free Amazon Business Account</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header>
                <div className={"p-1 w-100 d_header_top"}>
                    <button className="btn h-100" style={{ 'width': '9%' }}>
                        <img src={logo} className="img-fluid align-baseline logo_img w-100" />
                    </button>
                    <button className="btn h-100 lh-1 p-0" style={{ 'width': '12%' }}>
                        Hello
                        <span className="fw-bolder d-block">Select <span className="">your</span> <span className="">address</span></span>
                    </button>
                    <form className="d-inline-block text-center rounded bg-white ms-2 h-75 w-50 text-white h_from">
                        <div className="row m-0 p-0">
                            <div className="col-1 p-0 m-0 rounded dropdown b_clr">
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn dropdown-toggle text-center bu_focs" data-bs-toggle="dropdown" aria-expanded="false">All</button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" href="#">Action</Link></li>
                                        <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                        <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                        <li><Link className="dropdown-item" href="#">Action</Link></li>
                                        <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                        <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                        <li><Link className="dropdown-item" href="#">Action</Link></li>
                                        <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                        <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                        <li><Link className="dropdown-item" href="#">Action</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-10 p-0'>
                                <input
                                    type="text"
                                    className="form-control form_inpt_bor"
                                    placeholder='Search Amazon.in'
                                />
                            </div>
                            <div className="col-1 p-0 from_bgc">C</div>
                        </div>
                    </form>

                    <button className="btn p-3 ms-2" style={{ 'width': '4%' }} data-bs-toggle="modal" data-bs-target="#exampleModal3">EN</button>


                    <button className="btn h-100 p-0 m-0" data-bs-toggle="modal" data-bs-target="#exampleModal4" style={{ 'width': '10%' }}>
                        <div className="hello_sign_in">Hello, sign in</div>
                        <span className="fw-bolder ">Account &amp; lists </span>
                    </button>

                    <button className='fs-6 p-0 m-0 btn h-100 ' style={{ 'width': '5%' }}>
                        <div>Returns</div>
                        <span className="fw-bold ms-1">&amp; Order</span>
                    </button>

                    <button className="btn h-100" style={{ 'width': '5%' }}>
                        Cart
                    </button>
                </div>
                <div className="d_header_bottom ">
                    <ul className="ms-2 nav float-start">
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-bold" to="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                            <Link className="nav-link text-white" to="#">Today's Deals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Mobiles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Customer Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">New Releases</Link>
                        </li>
                        <li className="nav-item prime_hbr">
                            <Link className="nav-link text-white" to="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">Prime</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="#">Electronics</Link>
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
                            <div className="col p-2">
                                <div className="mainbox1_col p-3">
                                    <div className="w-100 h-100 d_main1_inner">
                                        <div className="bg-primary w-100">ASD</div>
                                        <Link className='btn fs-6 m-0 p-0 btn-link cmn_button_link' to='#'>See more</Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col p-2">
                                <div className="mainbox1_col p-3">
                                    <div className="w-100 h-100 d_main1_inner">
                                        <div className="bg-primary w-100">ASD</div>
                                        <Link className='btn fs-6 m-0 p-0 btn-link cmn_button_link' to='#'>See more</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col p-2">
                                <div className="mainbox1_col p-3">
                                    <div className="w-100 h-100 d_main1_inner">
                                        <div className="bg-primary w-100">ASD</div>
                                        <Link className='btn fs-6 m-0 p-0 btn-link cmn_button_link' to='#'>See more</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col p-2">
                                <div className="mainbox1_col p-3">
                                    <div className="w-100 h-100 d_main1_inner">
                                        <div className="bg-primary w-100">ASD</div>
                                        <Link className='btn fs-6 m-0 p-0 btn-link cmn_button_link' to='#'>See more</Link>
                                    </div>
                                </div>
                            </div>
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
                            <div id="carouselExample2" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className='img_Cont row'>
                                            <div className="col">2</div>
                                            <div className="col">2</div>
                                            <div className="col">2</div>
                                            <div className="col">2</div>
                                            <div className="col">2</div>
                                            <div className="col">2</div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='img_Cont row'>
                                            <div className="col">3</div>
                                            <div className="col">3</div>
                                            <div className="col">3</div>
                                            <div className="col">3</div>
                                            <div className="col">3</div>
                                            <div className="col">3</div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
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
                                <button className="carousel-control-prev button_next_prev rounded-end" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next button_next_prev rounded-start" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                                    <span className="carousel-control-next-icon " aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="d_main_bottom_5 d_main_com_5_6">
                            <div id="carouselExample3" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className='img_Cont2'>A</div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='img_Cont2'>B</div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='img_Cont2'>C</div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
                                    <span className="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="d_main_bottom_6 d_main_com_5_6">
                            <div id="carouselExample4" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className='img_Cont2'>A</div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='img_Cont2'>B</div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='img_Cont2'>C</div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample4" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample4" data-bs-slide="next">
                                    <span className="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="d_main_bottom_7 main_d_bottom main_com_margin"></div>
                        <div className="d_main_bottom_8 d_main_com_5_6">
                            <div id="carouselExample5" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className='img_Cont2'>A</div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='img_Cont2'>B</div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='img_Cont2'>C</div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample5" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample5" data-bs-slide="next">
                                    <span className="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
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