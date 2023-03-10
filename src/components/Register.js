import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(false);
  const { createUser,  verifyEmail } =
    useContext(AuthContext);

  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photoURL, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
       
        setError("");
        form.reset();
      
        handelEmailVerification();
        toast.success("Please verify your email address.");
      })

      .catch((error) => {
        console.error(error);
        setError(toast.error(error.message));
      });
  };

  

  const handelEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const handelAgree = (event) => {
    setAgree(event.target.checked);
  };

  return (
    <Form
      onSubmit={handelSubmit}
      className="mt-5 shadow p-5 rounded text-light container" style={{backgroundColor: '#223C60'}}
    >
      <h3 className="text-center my-3">Please Register!</h3>
      <hr className="w-50 mx-auto" />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handelAgree}
          label="Accept Terms and Conditions"
        />
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button
          variant="outline-light"
          className="w-50"
          type="submit"
          disabled={!agree}
        >
          Register
        </Button>
      </div>

      <Form.Text className="text-danger mx-auto fw-semibold ms-3">{error}</Form.Text>

      <h6 className="text-secondary text-center mt-2">
        Already have an account? Please{" "}
        <Link className="text-secondary"  to="/login">
          Login
        </Link>
      </h6>
    </Form>
  );
};

export default Register;
