import React from "react";
import { Redirect } from "react-router";
import { useState,useEffect } from "react";


export const DonorUserProfileView = () => {

  
  const [data, setData] = useState([]);

  const getProfile = async () => {
    try {
      let response = await fetch(
        "http://localhost:9008/api/DonorUser/v1/Donor/"+
        sessionStorage.getItem("donorId"),
          
        {
          method: "GET",
           credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            'Access-Control-Allow-Origin' :'http://localhost:9008/'
          },
        }
      );
      if (response.status === 200) {
        setData(await response.json());
        
      }
    } catch (error) {
      //Log ---
    }
  };
 
  useEffect(() => {
    getProfile();
  }, []);

  return (
     sessionStorage.getItem("donorId")!==null ? (
    <div>
    
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm py-3">
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.donorName}</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email-ID</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.donorEmail}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone Number</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.donorPhoneNumber}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Pancard</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.donorPanCard}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">City</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.donorCity}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.donorAddress}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Recent-Amount</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.donationAmount}</div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     ):<Redirect to="/Login"/>
  );
};
                