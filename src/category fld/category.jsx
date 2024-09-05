import React from "react";
import "../category fld/category.css"
import { catData } from "./cardspdata";
import { Link } from "react-router-dom";

// import Cardsp, { catData } from "./cardspdata"

function Category() {
    return (
        <>
            <section className="pop-post">
                <div className="container  mt-5 mb-5">
                    <div className="row ">
                        <div className="headingpost">
                            <h2 className="text-center" data-aos="fade-down"><span className="text-primary">C</span>ategory</h2>
                            <hr className="w-25 m-auto" data-aos="zoom-in" />
                        </div>
                        {
                            catData.map((data) => {
                                return (
                                    <div className="col-lg-6 " data-aos="zoom-in" key={data.id}>
                                        <div className="heading-sport my-4">
                                            <h3 className="sporthead">{data.heading}</h3>
                                        </div>
                                        <Link to="/sportpage" >
                                            <div className="row hover">
                                                <div className="col-sm-12 col-md-4 mt-2 cat-ig">
                                                    <img className="w-100 img-fluid" src={data.img} />
                                                </div>
                                                <div className="col-sm-12 col-md-8">
                                                    <p className="date my-3" ><span className="fw-bolder">{data.busnisstype}</span>{data.date}</p>
                                                    <h5 className="fs-5 fw-bold clsagain">{data.subheading}</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                )
                            })
                        }
                    </div>

                </div>
            </section>


        </>
    )
}

export default Category