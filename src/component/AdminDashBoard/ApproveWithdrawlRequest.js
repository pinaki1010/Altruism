import React from 'react'
import  { useState } from "react";
import axios from "axios";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import { green } from '@mui/material/colors';
import ApprovalRoundedIcon from '@material-ui/icons/Assignment';
import { Redirect } from "react-router";

export default function ApproveWithdrawlRequest() {
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const [value, setValue] = React.useState('false');
      const handleChange = (event) => {
      setValue(event.target.value);}
  const [updatebeneficiary, setupdatebeneficiary] = useState({

    requestID:0,
    action:null,
  })
  const  updateUser=async()=>{
    axios
    .post("http://localhost:9006/api/AdminUser/v1/WithDrawlRequest/"+updatebeneficiary.requestID +"/"+updatebeneficiary.action,
    {
      method: "POST",
       credentials: "include",
      headers: {
         "Content-Type": "application/json",
        Accept: "application/json",
        'Access-Control-Allow-Origin' : '*',
       
      }
    }, 
    updatebeneficiary)
    .then((response) => {
      if (response.status === 200) {

        window.alert("You have Successfully Approved Withdrawl Request")
       console.log(response)
       
      }else{
        console.log(response)
      }
    })
    
  }
    return (
      sessionStorage.getItem("adminId")!==null ? (
        <>
        <div className="container shadow p-3 mb-6 bg-white rounded text-white my-5 col-md-6"> 
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
            <Avatar style={avatarStyle} sx={{ bgcolor: green[500] }} variant="rounded">
            <ApprovalRoundedIcon/>
          </Avatar>
          <h4 style={{"color":"black"}}className="text-center container my-2 pt-5">Approve WithDrawlRequest</h4>
        
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <body>
            
              <div className="form-row  ">
                
                <div className="form-group ">
                  <label Htmlfor="benid"> requestID</label>
                  <input
                    onChange={(e) =>
                        setupdatebeneficiary({ ...updatebeneficiary,   requestID:e.target.value })
                    }
                    value={updatebeneficiary.requestID}
                    type="number"
                    className="form-control"
                    id="requestID"
                    placeholder="Write  requestID Whom you want to approved"
                    required
                  />
                </div>
                

                </div>

                <div className="form-row  ">
                
                <div className="form-group ">
                  <label Htmlfor="benid">Action</label>
                  <input
                    onChange={(e) =>
                        setupdatebeneficiary({ ...updatebeneficiary, action:e.target.value })
                    }
                    value={updatebeneficiary.action}
                    type="text"
                    className="form-control"
                    id="action"
                    placeholder="Write Accept Whom you want to approved"
                    required
                  />
                </div>
                

                </div>
                <button style={{"background-color": "#f44336"}} type="submit" class="btn btn-primary btn-sm my-3" onClick={updateUser}>
          <h7 id="loading"> Approved </h7>
          </button>
                </body>
                </div>
                </div>
                </div>
                </div>
                </>
                ):<Redirect to="/Login"/>
    )
}
