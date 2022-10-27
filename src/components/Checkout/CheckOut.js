import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import "./CheckOut.css";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const info = useLoaderData();
  const { name, price } = info;
  return (
    <div className="container my-5">
      <div className="card px-4">
        <p className="h8 py-3">Checkout</p>
        <div className="row gx-3">
          <div className="col-12">
            <div className="d-flex flex-column">
              <p className="text mb-1">Person Name</p>
              <input
                className="form-field mb-3"
                type="text"
                placeholder="Name"
                value={user?.displayName}
                readOnly
              />
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-column">
              <p className="text mb-1">Course Name</p>
              <input
                className="form-field mb-3"
                type="text"
                placeholder="Name"
                value={name}
                readOnly
              />
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-column">
              <p className="text mb-1">Price</p>
              <input
                className="form-field mb-3"
                type="text"
                placeholder="Name"
                value={"$" + price}
                readOnly
              />
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-column">
              <p className="text mb-1">Card Number</p>
              <input
                className="form-field mb-3"
                type="text"
                placeholder="1234 5678 435678"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-column">
              <p className="text mb-1">Expiry</p>
              <input
                className="form-field mb-3"
                type="text"
                placeholder="MM/YYYY"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-column">
              <p className="text mb-1">CVV/CVC</p>
              <input
                className="form-field mb-3 pt-2 "
                type="password"
                placeholder="***"
              />
            </div>
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary mb-3 d-flex justify-content-center align-items-center"
              onClick={() => toast.success("Successfully Enrolled")}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
