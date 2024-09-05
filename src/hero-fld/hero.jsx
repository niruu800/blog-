import "./hero.css";
import { heroCard } from "./heroCard";

function Hero() {
    return (
        <>
            <div className="container">
                <div className="trading-heading">
                    <h2 className="text-center fs-1 fw-bold" data-aos="zoom-in">
                        <span className="text-primary">T</span>rading
                    </h2>
                    <hr className="m-auto w-25" />
                </div>
                <div className="row">
                    <div
                        id="carouselExampleFade"
                        className="carousel slide carousel-fade"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            {heroCard.map((data, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={data.id}>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                                            <div className="carousel-img">
                                                <img
                                                    src={data.img}
                                                    className="d-block w-100"
                                                    data-aos="zoom-out-right"
                                                    alt="..."
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                                            <div className="trading-dt p-50" data-aos="zoom-out-left">
                                                <p className="date mt-3">
                                                    <span className="fw-bolder">
                                                        {data.businessType1}
                                                    </span>
                                                    {data.date1}
                                                </p>
                                                <h2 className="fs-1 mt-4">{data.heading1}</h2>
                                                <p className="mt-1">{data.para1}</p>
                                                <div className="userimg">
                                                    <img
                                                        className="w-100 mt-3"
                                                        src={data.userImg1}
                                                        alt="User"
                                                    />
                                                </div>
                                                <div className="details">
                                                    <span className="username">
                                                        <span className="fw-bolder">{data.userName1}</span>
                                                        <br />
                                                        {data.degination1}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleFade"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleFade"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
