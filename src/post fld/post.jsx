import React from "react";
import "./post.css"
import { postData } from "./postCarddata";




function Post() {
    return (

        <>
            <div className="container formargin">
                <div className="post-heading mb-4">
                    <h2 className="text-center" data-aos="fade-down"><span className="text-primary">P</span>ost</h2>
                    <hr className="w-25 m-auto mb-4" data-aos="zoom-in" />
                </div>
                <div className="row">
                    {
                        postData.map((data) => {

                            return (
                                <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3 style" data-aos="zoom-in" key={data.id} >



                                    <div className="post-img">
                                        <img src={data.postImg} className="d-block w-100 mt-3" alt="..." />
                                    </div>
                                    <div className="post-ex p-50 mb-3 ">
                                        <p className="date mt-3" ><span className="fw-bolder">{data.businesstype}</span> {data.businessdate}</p>
                                        <h5 className="fs-5 fw-bold mt-4">{data.heading1}</h5>
                                        <p className="mt-1">{data.para}</p>
                                        <div className="postimg">
                                            <img className="w-100 mt-3" src={data.personImg} alt="User" />
                                        </div>
                                        <div className="post-user">
                                            <span className="post-name">
                                                <span className="fw-bolder">{data.username}</span>
                                                <br />
                                                {data.dagination}
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
export default Post