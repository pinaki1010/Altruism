import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";

export const AdminUserNav = () => {
  const Logout=async()=>{
    {

      alert("Are You Sure!!")
     
        axios
        .post("http://localhost:9006/logout")
        .then((response) => {
          if (response.status === 200) {
           console.log(response.data)
           
           
          }else{
            console.log(response)
          }
        }) 
      sessionStorage.removeItem("adminId")
    }}
  var history=useHistory()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-white bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/AdminUserUi">
            Admin-DashBoard
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
                <Link className="nav-link" to="/ApprovedBeneficiary">
                ApprovedBeneficiary
                </Link>
              </li>
             
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/ApprovedDonor"
                >
                ApprovedDonor
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/ApprovedNgo">
                ApprovedNgo
                </Link>
              </li>

           
              <li className="nav-item">
                <Link className="nav-link" to="/ApproveWithdrawlRequest">
                ApproveWithdrawlRequest
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/DeleteBeneficiary">
                DeleteBeneficiary
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/DeleteDonor">
                DeleteDonor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/DeleteNgo">
                DeleteNgo
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
