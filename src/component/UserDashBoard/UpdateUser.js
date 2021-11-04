import React from 'react'
import  { useState } from "react";
import axios from "axios";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import { green } from '@mui/material/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Redirect } from "react-router";
import swal from 'sweetalert';
export default function UpdateUser() {

    const avatarStyle={backgroundColor:'#1bbd7e'}
    const [value, setValue] = React.useState('false');
      const handleChange = (event) => {
      setValue(event.target.value);}
  const [updatebeneficiary, setupdatebeneficiary] = useState({
     benId : 0 ,
     story : null ,
     image: null ,
     targetAmount : 0 
  })
const  updateUser=async()=>{
  axios
  .put("http://localhost:9007/api/BeneficiaryUser/v1/updateDetails"
  , updatebeneficiary)
  .then((response) => {
    if (response.status === 200) {
     console.log(response)
     window.alert("You have Successfully updated your Profile")
     
    }else{
      console.log(response)
      window.alert("Please Check Again details for Update")
    }
  }).catch((res)=>{
    
    window.alert("Please Check Again details for Update")
  })
  
}
    return (
      sessionStorage.getItem("beneficiaryId")!==null ? (
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
                        setupdatebeneficiary({ ...updatebeneficiary,  benId : e.target.value })
                    }
                    value={updatebeneficiary.benId}
                    type="number"
                    className="form-control"
                    id="benid"
                    placeholder="Write Your ID"
                    required
                  />
                </div>
    
                <div className="form-group">
                  <label Htmlfor="Story">Story</label>
                  <input
                 onChange={(e) =>
                    setupdatebeneficiary({ ...updatebeneficiary, story: e.target.value })
                 }
                value={updatebeneficiary.story}
                    type="text"
                    className="form-control"
                    id="story"
                    style={{ "text-transform": "uppercase" }}
                    placeholder="Write Your Updated Story"
                    required
                  />
                </div>
                <div className="form-group">
                  <label Htmlfor="Story">Image</label>
                  <input
                 onChange={(e) =>
                    setupdatebeneficiary({ ...updatebeneficiary, image : e.target.value })
                 }
                value={updatebeneficiary.image}
                type="file"
                className="form-control"
                id="image"
                placeholder="Image"
                required
                  />
                </div>
                <div className="form-group">
                  <label Htmlfor="Story">Target Amount</label>
                  <input
                 onChange={(e) =>
                    setupdatebeneficiary({ ...updatebeneficiary, targetAmount : e.target.value })
                 }
                value={updatebeneficiary.targetAmount}
                    type="number"
                    className="form-control"
                    id="targetamount"
                    placeholder="Provided Your Target Amount"
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



