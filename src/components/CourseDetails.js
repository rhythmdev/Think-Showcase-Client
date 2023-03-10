import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { BsStarFill } from "react-icons/bs";

import { useRef } from "react";




const CourseDetails = ({ course }) => {

  const detailsRef = useRef();
  const courseDetails = useLoaderData();
  const {
    name,
    image,
    instructor,
    ins_img,
    rating,
    description,
    enrolled,
    price,
  } = courseDetails;

  return (
   
    <div className="container my-5">
     
       <h5 className="text-center my-4">Get the course details <FaDownload ref={detailsRef} /></h5>
      
      <Card className="text-center  mx-auto" style={{ maxWidth: "500px" }}>
        <Card.Header>
          <img
            className="card-img-top  rounded details-image"
            src={image}
            alt=""
          />
        </Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title></Card.Title>
          <div className="d-flex justify-content-between align-items-center ">
            <div className="d-flex align-items-center">
              <img className="ins_img" src={ins_img} alt="" />
              <h6 className="text-secondary ms-1">{instructor}</h6>
            </div>
            <div className="d-flex ">
              <BsStarFill className="text-secondary mt-1 me-1" />
              <p>{rating}</p>
            </div>
          </div>
          <Card.Text className="my-2">
            <div className="d-flex justify-content-between align-items-center my-2">
              <h5>
                Price: <span className="text-secondary">${price}</span>
              </h5>
              <h5>
                Enrolled: <span className="text-secondary">{enrolled}</span>
              </h5>
            </div>
          </Card.Text>
          <Card.Text className="my-2">{description}</Card.Text>

          <Link to={`/courseDetails/${courseDetails.id}`}>
            <button
              className="btn text-white mt-2"
              style={{ backgroundColor: "#223C60" }}
            >
              Get Premium Access
            </button>
          </Link>
        </Card.Body>
      </Card>
     
    </div>
  
  );

};

export default CourseDetails;
