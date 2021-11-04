import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
import home from "../../pages/home";
import { Button } from "@material-ui/core";

export const DonorUserNav = () => {
  const Logout=async()=>{
    {

      alert("Are You Sure!!")
     
        axios
        .post("http://localhost:9008/logout")
        .then((response) => {
          if (response.status === 200) {
           console.log(response.data)
           
           
          }else{
            console.log(response)
          }
        }) 
      sessionStorage.removeItem("donorId")
      
      
      }
  }
  var history=useHistory()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-white bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Donor-DashBoard
          </Link>
          
          <button
            className="navbar-toggler bg-info "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          
        
          <div className="collapse navbar-collapse " id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px;" }}
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/DonorUserProfileView">
                 Profile
                </Link>
              </li>
             
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/Donate"
                >
                 Donate
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/TransactionList">
                Transactions
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/TaxReport">
                TaxReport
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/UpdateDonorUser">
                 Update
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ResetDonorUserPassword">
                Reset Password
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home" onClick={Logout}>
                LogOut
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
