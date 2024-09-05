import React from "react";
import "../sports blog/sp.css"
import Allblogs from "../AllBlog";
import { useParams } from "react-router-dom";



function Allsportsblog() {

    const { name } = useParams();
    
    console.log(name)
    let playerdata=Allblogs[name]

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                        <div className="authordata p-5">
                            <h6 className="text-secondary pt-4 ">{playerdata && playerdata.whoauthor}</h6>
                            <h1 className="fw-bold neerajheading py-4">{playerdata.authorname}</h1>
                            <p>{playerdata.aboutauthor}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                        <div className="authorimg text-center p-5">
                            <img class="img-fluid" src={playerdata.authorimgf} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text center mt-4">
                <hr className="m-auto"/>
            </div>
            <section className="neerajblog">
                <div className="container p-4">
                    <div className="row">
                        <div className="neerajbloghead">
                            <h4 className="fw-bold">{playerdata.authorblogname}</h4>

                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 d-flex author-name align-item-center">
                                <div className="logo-authorimg">
                                    <img class="img-fluid" src={playerdata.authorimgm} />
                                </div>
                                <span>
                                    <h6 className="ms-2">
                                        {playerdata.autsubhead}
                                    </h6>
                                </span>
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-12 ">
                            <div className="sp-blog-content">
                                <span className="title-sp">
                                {playerdata.athtitle}
                                </span>
                                <p>
                                {playerdata.pubdate}
                                </p>
                                <p className="sp-blog-content-p" >
                                {playerdata.authdes}
                                </p>
                                <figure>
                                    <a href="">
                                        <p>{playerdata.location}</p>
                                    </a>
                                </figure>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="Athletics-career">
                <div className="container">
                    <div className="row">
                        <div className="career-head text-center">
                            <h4>
                            <span className="text-primary ">{playerdata.gamename1}</span>{playerdata.gamename2} <span className="text-primary">{playerdata.gamename3}</span>{playerdata.gamename4}
                        </h4>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12">
                            <div className="neerajimg">
                                <img className="w-100 img-fluid p-5" src={playerdata.careerimg}/>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-6 col-sm-12">
                            <div className="career-details pt-5">
                                <h4>{playerdata.authordata1heading}</h4>
                                <p className="pt-3">
                                    {playerdata.datapra1}
                                    <br />
                                    {playerdata.datapra2}
                                </p>
                                <div className="readmore">
                                    
                                        <a href="">Read more</a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Allsportsblog