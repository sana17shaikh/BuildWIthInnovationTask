  import React, { useEffect, useState } from 'react'
  import { NavLink } from 'react-router-dom'
  import { useSelector } from 'react-redux'

  const Navbar = ({onLogout, searchQuery, setSearchQuery}) => {
   
    const state = useSelector(state => state.handlecart)
    console.log("search ",searchQuery)

    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Ecommerce</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link"  to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Product</a>
          </li>
        <form className="d-flex">
          <input className="form-control me-2"  value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}  type="search" placeholder="Search" aria-label="Search"/>
          {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
        </ul>
          <NavLink className="btn btn-outline-success m-2" to="/cart">Cart ({state.length})</NavLink>
          <button className="btn btn-outline-success" type="submit" onClick={onLogout}>Logout</button>
      </div>
    </div>
  </nav> 
      </>
    )
  }

  export default Navbar


