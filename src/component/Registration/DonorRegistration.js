import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import { green } from '@mui/material/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import  { useState } from "react";
import axios from "axios";

export  const DonorRegistration = () => {
  const paperStyle={padding :25,height:'95vh',width:400, margin:"70px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
  const [donor, setdonor] = useState({

    donorName:null,
    donorEmail: null,
    donorPanCard: null,
    donationAmount: 0,
    donorCity: null,
     donorAddress: null,
     donorPhoneNumber:  0,

  })
  const handleName=(e)=>{
    if(e.target.value.length<6 || e.target.value<16){
      document.getElementById("name").style.borderColor="red"
    }else{
      document.getElementById("name").style.borderColor="green"
    }
    setdonor({ ...donor, donorName: e.target.value })
  }
  const handleEmail=(e)=>{
    if (
      /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(e.target.value) === true
    ) {
      document.getElementById("email").style.borderColor = "green";
    } else {
      document.getElementById("email").style.borderColor = "red";
    }
    setdonor({ ...donor, donorEmail:e.target.value })
  }
  const handlePancard=(e)=>{
    if(e.target.value.length === 10){
      document.getElementById("panId").style.borderColor="green"
    }else{
      document.getElementById("panId").style.borderColor="red"
  
    }
    setdonor({ ...donor, donorPanCard: e.target.value })
  }

  const handlePhoneNumber=(e)=>{
    if(e.target.value.length===10){
      document.getElementById("donorphoneNumber").style.borderColor="green"
     
    }else{
      document.getElementById("donorphoneNumber").style.borderColor="red"
    }
    setdonor({ ...donor, donorPhoneNumber:e.target.value })

  }
  


const  submitDonor=async()=>{
  console.log(donor)
  axios
  .post("http://localhost:9008/api/DonorUser/v1/register", donor)
  .then((response) => {
    if (response.status === 200) {
     console.log(response)
     
    }else{
      console.log(response)
    }
  })
  
} 

  return(
      <Grid>
          <Paper elevation={10} style={paperStyle}>
              <Grid align='center'>
            <Avatar style={avatarStyle} sx={{ bgcolor: green[500] }} variant="rounded">
        <AssignmentIcon />
      </Avatar>
                  <h2>Donor SignUp</h2>

              </Grid>

              <div className="row justify-content-center align-item-center">
          <div className="container my-3  rounded ">
      
        <div className="form-row ">
          <div className="form-group col-md-6">
            <label Htmlfor="name">donorName</label>
            <input
              onChange={handleName}
              // (e) =>
              //   setdonor({ ...donor, donorName: e.target.value })
              // }
              value={donor.donorName}
              type="text"
              className="form-control"
              id="name"
              placeholder="Full Name"
              style={{ "text-transform": "uppercase" }}
              required
            />
          </div>

          <div className="form-group col-md-6">
            <label Htmlfor="email">donorEmail</label>
            <input
               onChange={handleEmail}
              //  (e) =>
              //   setdonor({ ...donor, donorEmail: e.target.value })
              // }
              value={donor.donorEmail}
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group col-md-6">
            <label Htmlfor="pandId">donorPanCard</label>
            <input
           onChange={handlePancard}
          //  {(e) =>
          //   setdonor({ ...donor, donorPanCard: e.target.value })
          // }
          value={donor.donorPanCard}
              type="text"
              className="form-control"
              id="panId"
              placeholder="Pan Number"
              maxlength="10"
              style={{ "text-transform": "uppercase" }}
              required
            />
          </div>

          <div className="form-group col-md-6">
            <label Htmlfor="donorphoneNumbe">donorPhoneNumber</label>
            <input
               onChange={handlePhoneNumber}
              //  {(e) =>
              //   setdonor({ ...donor, donorPhoneNumber: e.target.value })
              // }
              value={donor.donorPhoneNumber}
              type="number"
              className="form-control"
              id="donorphoneNumber"
              placeholder="PhoneNumber"
              maxLength="10"
              required
            />
          </div> 

          <div className="form-group col-md-6">
            <label Htmlfor="donorAddress">donorAddress</label>
            <input
             onChange={(e) =>
              setdonor({ ...donor, donorAddress: e.target.value })
            }
            value={donor.donorAddress}
              type="text"
              className="form-control"
              id="donorAddress"
              placeholder="Address"
              required
            />
          </div>
          <div className="form-row  d-flex">
            <div className="form-group col-md-3">
              <label Htmlfor="donor">donorCity</label>
              <input
               onChange={(e) =>
                setdonor({ ...donor, donorCity: e.target.value })
              }
              value={donor.donorCity}
                type="text"
                className="form-control"
                id="ifscCode"
                required
              />
            </div>
            <div className="form-group col-md-3">
              <label Htmlfor="balance">donationAmount</label>
              <input
               onChange={(e) =>
                setdonor({ ...donor,donationAmount: e.target.value })
              }
              value={donor.donationAmount}
                type="number"
                className="form-control"
                id="balance"
                required
                disabled
              />
            </div>
          </div>
        </div>
        <br />
        <button type="submit" class="btn btn-primary btn-sm my-3" onClick={submitDonor}>
        <h7 id="loading">  Sign Up </h7>
        </button>
      
    </div>  
      </div>
              
          </Paper>
      </Grid>
        
    )
}