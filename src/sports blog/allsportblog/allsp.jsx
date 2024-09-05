import React, { useEffect } from "react";
import "../allsportblog/allsp.css"
import spbanner from '../../assets/pic/sportsbanner.jpg'
import { fourCardsp } from "./allspcard"







function Allspblog() {
    useEffect(() => {
        scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="container-fluid bannerimg" style={{ backgroundImage: `url(${spbanner})` }}>

                <div className="container">

                    <div className="row ">
                        {
                            fourCardsp.map((data) => {
                                return (
                                    <div className="col-md-4 col-lg-4 col-sm-12" key={data.id}>

                                        <div className="authorimgg">
                                            <img src={data.authorimgg} className="w-100" alt="" />
                                        </div>
                                        <div className="authordetails">

                                            <div className="authorname">
                                                <h3><span className="name1 text-primary">{data.name1}</span>{data.name2}</h3>
                                            </div>
                                            <div className="authorabout">
                                                <p>
                                                    {data.prag}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                     )
                                    })
                                }
                    </div>

                </div>
               
            </div>



        </>
    )
}
export default Allspblog

