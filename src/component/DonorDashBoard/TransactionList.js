import React from 'react'
import { Redirect } from "react-router";
import { useState,useEffect } from "react";
import TransactionReciept from './TransactionReciept';

export default function TransactionList() {
    
   
    const [data, setData] = useState([]);

    const getData = async () => {
      try {
        let response = await fetch(
            "http://localhost:9008/api/DonorUser/v1/TransactionReceipt/"+
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
                                            <th>TransactionID</th>
                                            <th>DonorID</th>
                                            <th>UserAccountNumber</th>
                                            <th>RecieverAccountNumber</th>
                                            <th>TransactionAmount</th>
                                            <th>TransactionTimestamp</th>
                                            <th>TransactionCategory</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data.map((element) => { 
                                    return[ 
                                       <TransactionReciept
                                       transactionID={element.transactionID}
                                       donorID={element.donorID}
                                       userAccountNumber={element.userAccountNumber}
                                       recieverAccountNumber={element.recieverAccountNumber}
                                       transactionAmount={element.transactionAmount}
                                       transactionTimestamp={element.transactionTimestamp}
                                       transactionCategory={element.transactionCategory}
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
