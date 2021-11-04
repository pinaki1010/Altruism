import React from 'react'
import TransactionTable from './TransactionTable';
import { useState,useEffect } from "react";
import { Redirect } from "react-router";

export default function DonorList() {

    const [data, setData] = useState([]);

    const getData = async () => {
      try {
        let response = await fetch(
            "http://localhost:9007/api/BeneficiaryUser/v1/DonorList/" +
             sessionStorage.getItem("beneficiaryId"),
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
         sessionStorage.getItem("beneficiaryId")!==null ? (
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
                                            <th>Name</th>
                                            <th>amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data.map((element) => { 
                                    return[ 
                                       <TransactionTable 
                                       donorName={element.donorName}
                                       amount={element.donorAmount}
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

