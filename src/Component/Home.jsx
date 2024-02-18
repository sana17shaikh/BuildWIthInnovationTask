import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
// import { Link } from "react-router-dom"
import { addCart } from "../Action/Index";
import {useDispatch} from 'react-redux'

const Home = ({ loggedInUser, onLogout }) => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
    // const [products, setProducts] = useState();
  const dispatch = useDispatch()
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  useEffect(() => {
    const getProduct = async () => {
      const response = await axios("https://dummyjson.com/products");
      console.log(response.data);
      setData(await response.data.products);
    };
    getProduct();
  }, []);
  const filteredProducts = data?.filter((pro) => {
    return pro?.title.toLowerCase().includes(searchQuery.toLowerCase())
  }) 
  console.log("pro ", filteredProducts)
  // setProducts(filteredProducts)
  return (
    <div>
      <Navbar onLogout={onLogout} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <h1>Welcome, {loggedInUser ? loggedInUser.username : "Guest"}</h1>
            {/* <button onClick={onLogout}>Logout</button> */}
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          { 
            filteredProducts?.map((product) => {
            return (
              // <div
              //   id={product.id}
              //   key={product.id}
              //   className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
              // >
              <div className="card text-center cardbox" key={product.id}>
                <img
                  src={product.thumbnail}
                  alt="Card"
                  height={300}
                  className="card-img-top p-3"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 19)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">${product.price}</li>
                </ul> 
                <div className="card-body">
                  <button className="btn btn-dark m-1">Buy Now</button>
                  <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>Add to Cart</button>
                </div>
              </div>
              // </div>
            );
          })
          }
        </div>
      </div>
    </div>
  );
};

export default Home;



