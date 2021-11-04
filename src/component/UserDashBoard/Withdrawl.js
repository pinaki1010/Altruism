import React from 'react'
import  { useState } from "react";
import axios from "axios";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import { green } from '@mui/material/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Redirect } from "react-router";
import swal from 'sweetalert';
export default function Withdrawl() {
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const [value, setValue] = React.useState('false');
      const handleChange = (event) => {
      setValue(event.target.value);}
  const [updatebeneficiary, setupdatebeneficiary] = useState({
    beneficiaryEmailID: null,
    requestAmount:0
  })
const  submitUser=async()=>{
  axios
  .post("http://localhost:9007/api/BeneficiaryUser/v1/Withdrawl/"+updatebeneficiary.beneficiaryEmailID+"/"+updatebeneficiary.requestAmount,
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
     console.log(response)
     window.alert("You have successfully Requesting for Withdrawl")
     
    }else if(response.status === 400){
      console.log(response)
      window.alert("Ooops!! Invalid Details Please request Again..")
    }
    else{
      console.log(response)
    }
  }).catch((res)=>{
    window.alert("Ooops!! Invalid Details Please request Again..")
     
  })
  
} 
    return (
      sessionStorage.getItem("beneficiaryId")!==null ? (
        <>
        <div className="container shadow p-3 mb-6 bg-white rounded text-white my-5 col-md-6"> 
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
            <Avatar style={avatarStyle} sx={{ bgcolor: green[500] }} variant="rounded">
            <AssignmentIcon />
          </Avatar>
          <h4 style={{"color":"black"}}className="text-center container my-2 pt-5">Withdrawl Money</h4>
        
          <div id="login-column" className="col-md-4">
            <div id="login-box" className="col-md-12">
              <body>
            
              <div className="form-row  ">
                
                <div className="form-group ">
                  <label Htmlfor="email">email</label>
                  <input
                    onChange={(e) =>
                        setupdatebeneficiary({ ...updatebeneficiary, beneficiaryEmailID : e.target.value })
                    }
                    value={updatebeneficiary.beneficiaryEmailID}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="User Name"
                    required
                  />
                </div>
    
                <div className="form-group">
                  <label Htmlfor="requestAmount">Request Amount</label>
                  <input
                 onChange={(e) =>
                    setupdatebeneficiary({ ...updatebeneficiary, requestAmount: e.target.value })
                 }
                value={updatebeneficiary.requestAmount}
                    type="number"
                    className="form-control"
                    id="emailID"
                    style={{ "text-transform": "uppercase" }}
                    placeholder="User EmailID"
                    required
                  />
                </div>
                </div>
                <button type="submit" class="btn btn-primary btn-sm my-3" onClick={submitUser}>
          <h7 id="loading">  Submit </h7>
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
