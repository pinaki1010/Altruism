import React from 'react'
import { useState,useEffect } from "react";
import BeneficiaryList from './BeneficiaryList';
import { Redirect } from "react-router";

export default function ApprovedBeneficiaryList() {
  
  
    const [data, setData] = useState([]);

    const getData = async () => {
      try {
        let response = await fetch(
            "http://localhost:9006/api/AdminUser/v1/approvedBeneficiaryList",
            // sessionStorage.getItem("customerId"),
            {
              method: "GET",
               credentials: "include",
              headers: {
                 "Content-Type": "application/json",
                Accept: "application/json",
                'Access-Control-Allow-Origin' : '*',
               
              },}
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
      sessionStorage.getItem("adminId")!==null ? (
            // sessionStorage.getItem("customerId")!==null ? (
        //     <div>
        //       <LoadingBar
        //     color='#f11946'
        //     progress={progress}
           
        //   />
        //     <Navbar/> 
        <div className="container-fluid mt-100">
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <div className="active-member">
                            <div className="table-responsive">
                                <table className="table table-xs mb-0">
                                    <thead>
                                        <tr>
                                  
                                       <th>BeneficiaryName</th>
                                       <th>BeneficiaryEmailID</th>
                                       <th>BeneficaryPhoneNumber</th>
                                       <th>Category</th>
                                       <th>AccountNumber</th>
                                       <th>IFSCNumber</th>
                                       <th>BankBranch</th>
                                       <th>Story</th>
                                       <th>RecievedAmount</th>
                                      
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data.map((element) => { 
                                    return[ 
                                       <BeneficiaryList
                                   
                                       beneficiaryName={element.beneficiaryName}
                                       beneficiaryEmailID={element.beneficiaryEmailID}
                                       beneficaryPhoneNumber={element.beneficaryPhoneNumber}
                                       category={element.category}
                                       targetAmount={element.targetAmount}
                                       accountNumber={element.accountNumber}
                                       ifscNumber={element.ifscNumber}
                                       bankBranch={element.bankBranch}
                                       address={element.address}
                                       story={element.story}
                                       recievedAmount={element.recievedAmount}
                                      
                                       />
                                    ]
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
           
    ):<Redirect to="/Login"/>
    )
}


