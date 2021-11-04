import React from 'react'
import { useState,useEffect } from "react";
import TaxList from './TaxList';
import { Redirect } from "react-router";

export default function TaxReport() {
   
        
        const [data, setData] = useState([]);
    
        const getData = async () => {
          try {
            let response = await fetch(
                "http://localhost:9008/api/DonorUser/v1/TaxExemptionReport/"+
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
          getData();
        }, []);
    
        return (
              sessionStorage.getItem("donorId")!==null ? (
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
                                                <th>DonorID</th>
                                                <th>DonorName</th>
                                                <th>ngoName</th>
                                                <th>DonorPanCardNO</th>
                                                <th>DonorAddress</th>
                                                <th>DonorCity</th>
                                                <th>TransactionDate</th>
                                                <th>DonationAmount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data.map((element) => { 
                                        return[ 
                                           <TaxList
                                           donorID={element.donorID}
                                           donorName={element.donorName}
                                           ngoName={element.donorName}
                                           donorPanCardNo={element.donorPanCardNo}
                                           donorAddress={element.donorAddress}
                                           donorCity={element.donorCity}
                                           transactionDate={element.transactionDate}
                                           donationAmount={element.donationAmount}
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

