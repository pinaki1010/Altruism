import React from 'react'
import  { useState } from "react";
import axios from "axios";
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import { green } from '@mui/material/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Redirect } from "react-router";
import { DonorRegistration } from '../Registration/DonorRegistration';
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import swal from 'sweetalert';

export default function Donate() {
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const [value, setValue] = React.useState('false');
    var history=useHistory()
      const handleChange = (event) => {
      setValue(event.target.value);}
  const [updatebeneficiary, setupdatebeneficiary] = useState({

    donorId : sessionStorage.getItem("donorId"),
    donationAmount : 0,
    benId : 0,
  })
  const  updateUser=async()=>{
    try{
    axios
    .post("http://localhost:9008/api/DonorUser/v1/donate", updatebeneficiary)
    .then((response) => {
    
      if (response.status === 200) {
       window.alert("You have successfully donated")

     
       
      }else{
        
      
      }
      

    }).catch((res)=>{
     window.alert("Please Check Again")
      
    })
      
    
    
  }catch(res){
    window.alert("Oops!! Please Try again..")
  }
}
    return (
       sessionStorage.getItem("donorId")!==null ? (
        <>
        <div className="container shadow p-3 mb-6 bg-white rounded text-white my-5 col-md-6"> 
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
            <Avatar style={avatarStyle} sx={{ bgcolor: green[500] }} variant="rounded">
            <AssignmentIcon />
          </Avatar>
          <h4 style={{"color":"black"}}className="text-center container my-2 pt-5">Manual Donation</h4>
        
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <body>
            
              <div className="form-row  ">
                
                <div className="form-group ">
                  <label Htmlfor="benid">Beneficiary-ID</label>
                  <input
                    onChange={(e) =>
                        setupdatebeneficiary({ ...updatebeneficiary, benId: e.target.value })
                    }
                    value={updatebeneficiary.benId}
                    type="number"
                    className="form-control"
                    id="benID"
                    placeholder="Write Beneficiary Whom you want to donate"
                    required
                  />
                </div>
                {/* <div className="form-group ">
                  <label Htmlfor="donorID">Donor-ID</label>
                  <input
                    onChange={(e) =>
                        setupdatebeneficiary({ ...updatebeneficiary, donorId: e.target.value })
                    }
                    value={updatebeneficiary.donorId}
                    type="number"
                    className="form-control"
                    id="donorID"
                    placeholder="Write Your ID"
                    required
                  />
                </div> */}
                <div className="form-group ">
                  <label Htmlfor="donationAmount">Donation Amount</label>
                  <input
                    onChange={(e) =>
                        setupdatebeneficiary({ ...updatebeneficiary, donationAmount: e.target.value })
                    }
                    value={updatebeneficiary.donationAmount}
                    type="number"
                    className="form-control"
                    id="donationAmount"
                    placeholder="Write the amount to be donated "
                    required
                  />
                 </div>
    
                </div>
                
                <button type="submit" class="btn btn-primary btn-sm my-3" onClick={updateUser}>
          <h7 id="loading"> Donate </h7>
          </button>
        
                <Link className="nav-link" to="/DonorRegistration">
               If You havent DonorID then You can Registered Here
                </Link>
          
        
                </body>
                </div>
                </div>
                </div>
                </div>
                </>
                 ):<Redirect to="/Login"/>
    )
}
