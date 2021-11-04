import React from 'react'
import { useState,useEffect } from "react";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import { green } from '@mui/material/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Redirect } from "react-router";
import swal from 'sweetalert';
export default function NgoExtendExpireDate() {
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const [data, setData] = useState({});
   
    const getData = async () => {
      try {
        let response = await fetch(
            "http://localhost:9009/api/NgoUser/v1/ExpireDate/"+
            sessionStorage.getItem("ngoId"),
          {
            method: "PATCH",
             credentials: "include",
            headers: {
               "Content-Type": "application/json",
              Accept: "application/json",
              'Access-Control-Allow-Origin' : '*',
             
            },
          }
        );
        if (response.status === 200) {
          setData(await response.json());
      
         
            
        }
      } catch (error) {
        //Log ---
        console.log(error)
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    return (
        sessionStorage.getItem("ngoId")!==null ? (
        <div className="container shadow p-3 mb-6 bg-white rounded text-white my-5 col-md-6"> 
        <div
          id="login-row"
          className="row justify-content-center align-items-center my-3 md-6"
        >
             <Avatar style={avatarStyle} sx={{ bgcolor: green[500] }} variant="rounded">
            <AssignmentIcon />
          </Avatar>
          <h4 style={{"color":"black"}}className="text-center container my-2 pt-5">Your Expire Date Succesfully Updated</h4>
        
          <div id="login-column" className="col-md-4">
            <div id="login-box" className="col-md-12">
              <div className="form-row  ">
                <div className="form-group ">
                  <label Htmlfor="email">Your Extended Expire Date is:-</label>
                  </div>
                    <div className="col-md-6 text-primary row justify content-center mx-5">{data.expiredate}</div>
                  </div>
                </div>
                </div>
                </div>
                </div>
                
                ):<Redirect to="/Login"/>   
    )
}
