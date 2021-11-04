import React from "react";
import { Redirect } from "react-router";
import { useState,useEffect } from "react";


export const UserProfileView = () => {

 
  const [data, setData] = useState([]);

    const getData = async () => {
      try {
        let response = await fetch(
            "http://localhost:9007/api/BeneficiaryUser/v1/benefeciary/"+
              sessionStorage.getItem("beneficiaryId"),
          {
            method: "GET",
             credentials: "include",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              'Access-Control-Allow-Origin' : 'http://localhost:9007/'
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
      getData();
    }, []);


  return (
     sessionStorage.getItem("beneficiaryId")!==null ? (
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
                      <h6 className="mb-0">Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.beneficiaryName}</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email-ID</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.beneficiaryEmailID}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone Number</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.beneficaryPhoneNumber}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0"> category</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.category}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0"> targetAmount</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.targetAmount}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">AccountNumber</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.accountNumber}</div>
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
                    <div className="col-sm-9 text-secondary">{data.story}</div>
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
                