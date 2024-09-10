import React from "react";
import "../about fld/about.css"
import post4 from "../assets/pic/tech.jpg"



const About = () => {
    return (
        <>
            <div className="aboutheading mt-4">
                <h2 className="text-center" data-aos="fade-down"><span className="text-primary">A</span>bout us</h2>
                <hr className="w-25 m-auto" data-aos="zoom-in" />
            </div>
            <section className="about py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                            <div className="subheading" data-aos="zoom-out">
                                <h6>Technology News</h6>
                            </div>
                            <div className="main-heading" data-aos="zoom-out">
                                <h3>Sergy Campbell</h3>
                            </div>
                            <div className="para" data-aos="zoom-out">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit perferendis officia architecto
                                    explicabo exercitationem, quis vitae, aspernatur fugiat nam voluptas expedita facilis nemo
                                    asperiores sunt, vel cum quod tenetur nesciunt porro quos! Animi ex doloribus temporibus tempora
                                    commodi veniam exercitationem voluptatibus distinctio eius atque. Dolorum expedita natus a,
                                    tempore ea aspernatur doloribus earum quaerat perferendis eaque, eligendi repellendus laboriosam
                                    obcaecati fugit enim inventore dolor, esse deserunt quidem. Amet quisquam cumque quod ut. Minus
                                    odit, dicta odio quo est placeat eos obcaecati soluta fugiat, quos perferendis itaque aperiam
                                    cumque, reprehenderit possimus hic consequatur? </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12" data-aos="zoom-out">
                            <div className="about-img">
                                <img src={post4} className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>






        </>
    )
}
export default About