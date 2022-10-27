import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import SingleCourseCard from "../Cards/SingleCourseCard";
import "./Courses.css";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4}>
            <div className="mt-5 border p-4 shadow-sm rounded">
              {courses.map((course) => (
                <div key={course.id}>
                   <Link to={`/course/${course.id}`}>
                   <Button
                    variant="outline-dark btn-sm"
                    className="my-2 fw-semibold"
                  >
                    {course.name}
                  </Button>{" "}
                   </Link>
                 
                </div>
              ))}
            </div>
          </Col>

          <Col lg={8}>
            <div className="container  d-flex justify-content-center align-items-center my-5">
              <div className="cards">
                {courses.map((course) => (
                  <SingleCourseCard
                    key={course.id}
                    course={course}
                  ></SingleCourseCard>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
