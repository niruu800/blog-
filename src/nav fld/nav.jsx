import React from "react";
import "./nav.css"
import logoimg from "../assets/pic/logo.png"
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <>
            <section className="navbar-s">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid px-5 couroselbtn">
                        <a className="navbar-brand" href="#"><img src={logoimg} /></a>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="" className="nav-link active" aria-current="page">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" >ABOUT
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <Link to="/category" className="nav-link">CATEGROY
                                        </Link>
                                        <div className="dropdown-inner">
                                            <div className="inner-box">
                                                <Link to="/sportpage">Sports</Link>
                                                <Link to="">Food</Link>
                                                <Link to="">Fashion</Link>
                                                <Link to="">Tech</Link>

                                            </div>
                                        </div>
                                    </div>

                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">CONTACT US</Link>

                                </li>
                            </ul>
                            <form className="d-flex ms-auto me-2 from-b">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                            <div>
                                <div className="loginbtn">
                                    <button type="button" className=" nav-btn btn  btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <i className="fa-solid fa-user"></i>
                                    </button>
                                </div>


                                <div className="modal fade loginfromm" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content inputdiv">
                                            <div className="modal-header">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body p-5 loginfrom">
                                                <form>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                                        <input type="email" className=" input email-input   form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter your mail" />
                                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleInputPassword1" className=" form-label">Password</label>
                                                        <input type="password" className=" input email-input   form-control" id="exampleInputPassword1" placeholder="enter your passward" />
                                                    </div>
                                                    <div className="mb-3 form-check">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                                    </div>
                                                    <button type="submit" className="btn submitbtn btn-primary">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
            </section >


        </>
    )

}
export default Navbar