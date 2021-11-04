import { Logout } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
import { Button } from "@material-ui/core";
export const UserNav = () => {
  var history=useHistory()
  const Logout=async()=>{
    {

      alert("Are You Sure!!")
     
        axios
        .post("http://localhost:9007/logout")
        .then((response) => {
          if (response.status === 200) {
           console.log(response.data)
           
           
          }else{
            console.log(response)
          }
        }) 
      sessionStorage.removeItem("beneficiaryId")
    }
  }
      
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-white bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            User-DashBoard
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
                <Link className="nav-link" to="/UserProfileView">
                 Profile
                </Link>
              </li>
             
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/WithdrawlForm"
                >
                 Withdrawl
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ExtendExpireDate">
                 ExtendExpireDate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/UpdateUser">
                Update
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/DonorList">
                DonorList
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ResetUserPassword">
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
