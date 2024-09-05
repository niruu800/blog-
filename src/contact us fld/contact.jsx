import React from "react";
import "../contact us fld/contact.css"

function Contact() {
    return (
        <>
            <div className="container">
                <h2 className="text-center" data-aos="fade-down"><span className="text-primary">C</span>ontact <span className="text-primary">U</span>s</h2>
                <hr className="w-25 m-auto" data-aos="zoom-in" />
                <div className="row mt-5">
                    <div className="col-lg-12" data-aos="fade-up">
                        <h2 className="fs-2 fw-bold"><span className="ctct">S</span>ubscribe to newsletter</h2>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-6 mb-5"data-aos="fade-up">

                        <form className="fromdata" action="">
                            <div className="input email-input   w-100" data-aos="fade-up">
                                <input className="w-100 " type="Email" placeholder="Enter your gmail"data-aos="fade-up" />

                            </div>
                            <div className="btnn col-lg-6 col-sm-12 col-md-6 col-12 "data-aos="fade-up">
                                <button><a href="# ">SUBSCRIBE</a></button>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-6 text-center ">
                        <div className="contact-icon d-flex"data-aos="fade-up" >
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <i className="fa-brands fa-instagram" ></i>

                            </div>
                            <div data-aos="fade-up"data-aos-duration="1500">
                                <i className="fa-brands fa-facebook-f"></i>

                            </div>
                            <div data-aos="fade-up"data-aos-duration="2000">
                                <i className="fa-brands fa-twitter"></i>

                            </div>
                            <div data-aos="fade-up"data-aos-duration="2500">
                                <i className="fa-brands fa-whatsapp"></i>
                            </div>

                        </div>
                        <div className="copyright mt-5 mb-2">
                            <a href="">Copyright ©2024 All rights reserved | This template is made with  by Colorlib  Terms & Conditions/ Privacy Policy</a>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )

}

export default Contact