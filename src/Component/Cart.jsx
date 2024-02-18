import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handlecart);
  console.log("state ", state);
  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <ArrowBack className="fa fa-arrow-left" /> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };
  const ShowCart = () => {
    return (
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Item List</h5>
                </div>
                <div className="card-body">
                  {state.map((item) => {
                    console.log("items ", item)
                    return (  
                      <div key={item.id}>
                        <div className="row d-flex align-items-center">
                          <div className="col-lg-3 col-md-12">
                            <div
                              className="bg-image rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                width={100}
                                height={75}
                              />
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-6">
                            <p>
                              <strong>{item.title}</strong>
                            </p>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div
                              className="d-flex mb-4"
                              style={{ maxWidth: "300px" }}
                            >
                            </div>
                          </div>
                        </div>
                        <hr className="my-4" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        {state.length  ? <ShowCart /> : <EmptyCart />}
      </div>
    </>
  );
};

export default Cart;
