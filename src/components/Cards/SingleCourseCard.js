import React from "react";
import "./SingleCourseCard.css";
import { BsStarFill } from "react-icons/bs";
import { Button } from "react-bootstrap";

const SingleCourseCard = ({ course }) => {
  const { name, image, instructor, ins_img, rating, details } = course;
  return (
    <div>
      <div className="card-container shadow p-3">
        <img className="course-img" src={image} alt="" />
        <h6 className="text-center name my-2">{name}</h6>
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
        <div className="text-center text-secondary py-2">
          <p>{details}</p>
        </div>
        <div className="d-flex justify-content-center align-items-center py-2">
          <Button variant="outline-dark w-50">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseCard;
