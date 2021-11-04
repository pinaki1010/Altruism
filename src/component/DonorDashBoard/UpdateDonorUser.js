import React from 'react'
import  { useState } from "react";
import axios from "axios";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import { green } from '@mui/material/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Redirect } from "react-router";
import { useHistory } from "react-router";
export default function UpdateDonorUser() {
  var history=useHistory()
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const [value, setValue] = React.useState('false');
      const handleChange = (event) => {
      setValue(event.target.value);}
  const [updatebeneficiary, setupdatebeneficiary] = useState({
    donorID: 0, 
    number: 0, 
    donorEmail: null
  })
const  updateUser=async()=>{
  axios
  .put("http://localhost:9008/api/DonorUser/v1/update/", updatebeneficiary)
  .then((response) => {
    if (response.status === 200) {
      window.alert("You have Successfully Update your Profile")
     console.log(response)
     
    }else{
      window.alert("Please Try Again")
      console.log(response)
    }
  }).catch((res)=>{
    window.alert("OOPS!! Please Try Again")
  history.push("/Login")
  
})
  
}
    return (
      sessionStorage.getItem("donorId")!==null ? (
        <>
        <div className="container shadow p-3 mb-6 bg-white rounded text-white my-5 col-md-12"> 
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
            <Avatar style={avatarStyle} sx={{ bgcolor: green[500] }} variant="rounded">
            <AssignmentIcon />
          </Avatar>
          <h4 style={{"color":"black"}}className="text-center container my-2 pt-5">Update User</h4>
        
          <div id="login-column" className="col-md-4">
            <div id="login-box" className="col-md-12">
              <body>
            
              <div className="form-row  ">
                
                <div className="form-group ">
                  <label Htmlfor="benid">Your ID</label>
                  <input
                    onChange={(e) =>
                        setupdatebeneficiary({ ...updatebeneficiary,  donorID:e.target.value })
                    }
                    value={updatebeneficiary.donorID}
                    type="number"
                    className="form-control"
                    id="benid"
                    placeholder="Write Your ID"
                    required
                  />
                </div>

                <div className="form-group ">
                  <label Htmlfor="Phonenumber">Phone Number</label>
                  <input
                    onChange={(e) =>
                        setupdatebeneficiary({ ...updatebeneficiary,  number:e.target.value })
                    }
                    value={updatebeneficiary.number}
                    type="number"
                    className="form-control"
                    id="phoneno"
                    placeholder="Write Your Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label Htmlfor="Email">New EmailID</label>
                  <input
                 onChange={(e) =>
                    setupdatebeneficiary({ ...updatebeneficiary, donorEmail:e.target.value })
                 }
                value={updatebeneficiary.donorEmail}
                    type="email"
                    className="form-control"
                    id="donoremail"
                    style={{ "text-transform": "uppercase" }}
                    placeholder="Write Your New EmailID"
                    required
                  />
                </div>
                
                </div>
                <button type="submit" class="btn btn-primary btn-sm my-3" onClick={updateUser}>
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



