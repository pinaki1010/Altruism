import React from 'react'
import { useState,useEffect } from "react";
import NgoList from './NgoList';
import { Redirect } from "react-router";

export default function NotApprovedNgoList() {
    
   
    const [data, setData] = useState([]);

    const getData = async () => {
      try {
        let response = await fetch(
            "http://localhost:9006/api/AdminUser/v1/notApprovedNgoList/" ,
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
                                  
                                      
                                       <th> name</th>
                                       <th> ngoPanCardNo</th>
                                       <th> pancardOwnerTrust</th>
                                       <th>adharCardNo</th>
                                       <th>purposeofTrust</th>
                                       <th>ngoBankAccountNo</th>
                                       <th>BankBranch</th>
                                       <th>Address</th>
                                       <th>Story</th>
                                       <th>PhoneNo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data.map((element) => { 
                                    return[ 
                                       <NgoList
                                     
                                      
                                       name={element.name}
                                       ngoPanCardNo={element.ngoPanCardNo}
                                       pancardOwnerTrust={element.pancardOwnerTrust}
                                       adharCardNo={element.adharCardNo}
                                       purposeofTrust={element.purposeofTrust}
                                       ngoBankAccountNo={element.ngoBankAccountNo}
                                       bankBranch={element.bankBranch}
                                       address={element.address}
                                       ngoStory={element.ngoStory}
                                       phoneNo={element.phoneNo}
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



