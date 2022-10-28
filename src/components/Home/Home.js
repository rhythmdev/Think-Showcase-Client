import React from "react";
import Carousel from "react-bootstrap/Carousel";
import sliderOne from "../../assets/sliderOne.json";
import { Link } from "react-router-dom";
import sliderThree from "../../assets/sliderThree.json";
import about from "../../assets/about.json";
import Lottie from "lottie-react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* slider area */}
      <Carousel fade>
        <Carousel.Item
          className="rounded"
          style={{
            backgroundColor: "#8EC5FC",
            backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
          }}
        >
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 d-flex align-items-center justify-content-around ">
              <div>
                <h2 className="display-4 fw-semibold text-white ">
                  <span>Committed To</span>
                  <br />

                  <span>Learn Excellence</span>
                  <br />

                  <span>In Education</span>
                </h2>
                <Link to="/courses">
                  <button
                    className="btn text-white fw-bold"
                    style={{
                      backgroundColor: "#8BC6EC",
                      backgroundImage:
                        "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
                    }}
                  >
                    Explorer Course
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <Lottie
                animationData={sliderOne}
                className="img-fluid"
                loop={true}
                style={{ width: "500px", height: "500px" }}
              ></Lottie>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item
          className="rounded"
          style={{
            backgroundColor: "#8EC5FC",
            backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
          }}
        >
          <div className="row">
            <div className="col-lg-7 col-md-5 col-sm-12 d-flex align-items-center justify-content-around">
              <div>
                <h2 className="display-4 fw-semibold text-white">
                  <span>Start Better</span>
                  <br />

                  <span>Learn Future</span>
                  <br />

                  <span>From Here</span>
                </h2>

                <Link to="/courses">
                  <button
                    className="btn text-white fw-bold"
                    style={{
                      backgroundColor: "#8BC6EC",
                      backgroundImage:
                        "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
                    }}
                  >
                    Explorer Course
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-lg-5 col-sm-12">
              <Lottie
                animationData={sliderThree}
                className="img-fluid"
                loop={true}
                style={{ width: "500px", height: "500px" }}
              ></Lottie>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* end of slider area */}
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 ">
            <div className="service-item text-center pt-3 rounded p-4 ">
              <div className="p-4">
                <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                <h5 className="mb-3">Skilled Instructors</h5>
                <p>
                  We provide you best skilled instructors for better learning
                  experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 ">
            <div className="service-item text-center pt-3 rounded p-4">
              <div className="p-4">
                <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                <h5 className="mb-3">Online Classes</h5>
                <p>
                  We know your demand. That's why we teach you extra by online
                  class.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 ">
            <div className="service-item text-center pt-3 rounded p-4">
              <div className="p-4">
                <i className="fa fa-3x fa-home text-primary mb-4"></i>
                <h5 className="mb-3">Home Projects</h5>
                <p>
                  For practice and identify your skill we give you various types
                  of projects.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 ">
            <div className="service-item text-center pt-3 rounded p-4">
              <div className="p-4">
                <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                <h5 className="mb-3">Book Library</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-center">About Us</h2>
        <hr className="w-50 mx-auto" />
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-6 text-center mt-5">
            <h2>Who we Are?</h2>
            <p className="fw-semibold">
              We are leading online learning platform in Bangladesh. Skill is
              more important in this modern time. Our motive is to skilled the
              younger and solved the unemployment problem.
            </p>
          </div>
          <div className="col-lg-6 col-md-6">
            <Lottie
              animationData={about}
              className="img-fluid"
              loop={true}
              style={{ width: "500px", height: "500px" }}
            ></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
