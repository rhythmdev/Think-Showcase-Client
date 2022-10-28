import React from "react";
import { useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import error404 from "../../assets/error404.json";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="error-anime w-50 h-50 mx-auto">
              <Lottie animationData={error404} loop={true}></Lottie>
            </div>
          </div>

          <div>
            <p className="fw-bold fs-4 text-danger text-center">
              {error.statusText || error.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
