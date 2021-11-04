import React from "react";
import { Redirect } from "react-router";
import { useState,useEffect } from "react";


export const NgoUserProfileView = () => {


  const [data, setData] = useState([]);

  const getProfile = async () => {
    try {
      let response = await fetch(
        "http://localhost:9009/api/NgoUser/v1/Ngo/"+
         sessionStorage.getItem("ngoId"),  
        {
          method: "GET",
           credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            'Access-Control-Allow-Origin' : 'http://localhost:9009/'
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
    sessionStorage.getItem("ngoId")!==null ? (
    <div>
    
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm py-3">
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone Number</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.phoneNo}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Ngo-Pancard</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.ngoPanCardNo}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Owner-Pancard</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.pancardOwnerTrust}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Owner-AdharCardNo</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.adharCardNo}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">PurposeOfTrust</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.purposeofTrust}</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Bank-AccountNumber </h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.ngoBankAccountNo}</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Recieved Amount </h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.ngoBankAccountNo}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">BankBranch</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.bankBranch}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.address}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Story</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.ngoStory}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">RecievedAmount</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.recievedAmount}</div>
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
                