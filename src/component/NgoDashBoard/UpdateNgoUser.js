import React from 'react'
import  { useState } from "react";
import axios from "axios";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import { green } from '@mui/material/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Redirect } from "react-router";
import swal from 'sweetalert';
export default function UpdateNgoUser() {

    const avatarStyle={backgroundColor:'#1bbd7e'}
    const [value, setValue] = React.useState('false');
      const handleChange = (event) => {
      setValue(event.target.value);}
  const [updatebeneficiary, setupdatebeneficiary] = useState({
     ngoId : 0 , 
     phoneNo : 0 ,
     ngoImage:null,
     purposeOfTrust : null,
     targetAmount : 0,
     ngoAddress : null,
     ngoStory : null,
  })
const  updateUser=async()=>{
  axios
  .put("http://localhost:9009/api/NgoUser/v1/update",updatebeneficiary)
  .then((response) => {
    if (response.status === 200) {
      window.alert("You have Successfully Updated your Profile")
     console.log(response)
     
    }else{
      window.alert("Please Write the details again")
      console.log(response)
    }
  }).catch((res)=>{
   window.alert("ooops!! Please Try again")
    
  })
  
}
    return (
      sessionStorage.getItem("ngoId")!==null ? (
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
            
              <div className="form-row">
                
                <div className="form-group ">
                  <label Htmlfor="benid">Your ID</label>
                  <input
                    onChange={(e) =>
                        setupdatebeneficiary({ ...updatebeneficiary,ngoId:e.target.value })
                    }
                    value={updatebeneficiary.ngoId}
                    type="number"
                    className="form-control"
                    id="ngoID"
                    placeholder="Write Your ID"
                    required
                  />
                </div>

                <div className="form-group ">
                  <label Htmlfor="Phonenumber">Phone Number</label>
                  <input
                    onChange={(e) =>
                        setupdatebeneficiary({ ...updatebeneficiary,phoneNo:e.target.value })
                    }
                    value={updatebeneficiary.phoneNo}
                    type="number"
                    className="form-control"
                    id="phoneno"
                    placeholder="Write Your Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label Htmlfor="Story">Image</label>
                  <input
                 onChange={(e) =>
                    setupdatebeneficiary({ ...updatebeneficiary, ngoImage: e.target.value })
                 }
                value={updatebeneficiary.ngoImage}
                type="file"
                className="form-control"
                id="image"
                placeholder="Image"
                required
                  />
                </div>
    
                <div className="form-group">
                  <label Htmlfor="Purpose Of Trust">Purpose OF Trust</label>
                  <input
                 onChange={(e) =>
                    setupdatebeneficiary({ ...updatebeneficiary, purposeOfTrust: e.target.value })
                 }
                value={updatebeneficiary.purposeOfTrust}
                    type="text"
                    className="form-control"
                    id="story"
                    style={{ "text-transform": "uppercase" }}
                    placeholder="Write Your Updated Story"
                    required
                  />
                </div>

                <div className="form-group">
                  <label Htmlfor="Story">Target Amount</label>
                  <input
                 onChange={(e) =>
                    setupdatebeneficiary({ ...updatebeneficiary,targetAmount:e.target.value })
                 }
                value={updatebeneficiary.targetAmount}
                    type="number"
                    className="form-control"
                    id="targetamount"
                    placeholder="Provided Your Target Amount"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label Htmlfor="Story">Address</label>
                  <input
                 onChange={(e) =>
                    setupdatebeneficiary({ ...updatebeneficiary, ngoAddress: e.target.value })
                 }
                value={updatebeneficiary.ngoAddress}
                    type="text"
                    className="form-control"
                    id="story"
                    style={{ "text-transform": "uppercase" }}
                    placeholder="Write Updated Location Of Your NGO"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label Htmlfor="Story">New Story</label>
                  <input
                 onChange={(e) =>
                    setupdatebeneficiary({ ...updatebeneficiary, ngoStory : e.target.value })
                 }
                value={updatebeneficiary.ngoStory}
                    type="text"
                    className="form-control"
                    id="story"
                    style={{ "text-transform": "uppercase" }}
                    placeholder="Write Your Updated Story"
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


