import React from 'react'
import { useState,useEffect } from "react";
import DonorList from './DonorList';
import { Redirect } from "react-router";

export default function ApprovedDonorList() {
    
    
    const [data, setData] = useState([]);

    const getData = async () => {
      try {
        let response = await fetch(
            "http://localhost:9006/api/AdminUser/v1/approvedDonorList",
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
                                          
                                            <th>DonorName</th>
                                            <th>DonorEmail</th>
                                            <th>DonorPanCard</th>
                                            <th>DonorCity</th>
                                            <th>DonorAddress</th>
                                            <th>DonorPhoneNumber</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data.map((element) => { 
                                    return[ 
                                       <DonorList
                                      
                                       donorName={element.donorName}
                                       donorEmail={element.donorEmail}
                                       donorPanCard={element.donorPanCard}
                                       donorCity={element.donorCity}
                                       donorAddress={element.donorAddress}
                                       donorPhoneNumber={element.donorPhoneNumber}
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

