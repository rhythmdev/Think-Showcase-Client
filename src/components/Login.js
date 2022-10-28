import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setLoading, signInWithGoogle, signInWithGithub, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password)
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user)
        form.reset();
        setUser(user);
        toast.success(`Welcome ${user.displayName}`);

        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error("Please verify your email address.");
        }
      })
      .catch((error) => {
        setError(toast.error(error.message));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // google sign in
  const handelGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success(`Welcome ${user.displayName}`);
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };
  // github sign in
  const handelGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log(user);
        toast.success(`Welcome ${user.displayName}`);
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <Form
      onSubmit={handelSubmit}
      className="mt-5 shadow p-5 rounded text-light container"
      style={{ backgroundColor: "#223C60" }}
    >
      <h3 className="text-center my-3">Please Login!</h3>
      <hr className="w-50 mx-auto" />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter Your Password"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Enter Your Password"
          required
        />
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button
          variant="outline-light"
          className="w-50 fw-semibold"
          type="submit"
        >
          Login
        </Button>
      </div>

      <Form.Text className="text-danger mx-auto fw-semibold ms-3">
        {error}
      </Form.Text>
      <h6 className="text-center text-secondary my-3">Or Login With</h6>
      <hr className="w-50 mx-auto" />
      <div className="text-center">
        <FaGoogle onClick={handelGoogleSignIn} />
        <FaGithub onClick={handelGithubSignIn} className="ms-2" />
      </div>
      <h6 className="text-secondary text-center mt-2">
        Don't have an account? Please{" "}
        <Link className="text-secondary" to="/register">
          Register
        </Link>
      </h6>
    </Form>
  );
};

export default Login;
