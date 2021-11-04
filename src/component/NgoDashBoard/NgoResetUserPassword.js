import React from 'react'
import  { useState } from "react";
import axios from "axios";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import { green } from '@mui/material/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Redirect } from "react-router";
import swal from 'sweetalert';
export default function NgoResetUserPassword() {
    
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const [value, setValue] = React.useState('false');
      const handleChange = (event) => {
      setValue(event.target.value);}
  const [updatebeneficiary, setupdatebeneficiary] = useState({

    userId : 0,
    previousPassword : null,
    newPassword : null ,
    confirmPassword : null
  })
const  updateUser=async()=>{
  axios
  .put("http://localhost:9009/api/NgoUser/v1/resetPassword",updatebeneficiary)
  .then((response) => {
    if (response.status === 200) {
      window.alert("Your Password Reset Successfully")
     console.log(response)
     
    }else{
      window.alert("Please Write Again")
      console.log(response)
    }
  }).catch((res)=>{
  window.alert("Ooops!! Please Try Again..")
    
  })
  
}
    return (
      sessionStorage.getItem("ngoId")!==null ? (
        <>
        <div className="container shadow p-3 mb-6 bg-white rounded text-white my-5 col-md-6"> 
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
            <Avatar style={avatarStyle} sx={{ bgcolor: green[500] }} variant="rounded">
            <AssignmentIcon />
          </Avatar>
          <h4 style={{"color":"black"}}className="text-center container my-2 pt-5">Reset Password</h4>
        
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <body>
            
              <div className="form-row  ">
                
                <div className="form-group ">
                  <label Htmlfor="benid">UserID</label>
                  <input
                    onChange={(e) =>
                        setupdatebeneficiary({ ...updatebeneficiary, userId: e.target.value })
                    }
                    value={updatebeneficiary.userId}
                    type="number"
                    className="form-control"
                    id="benID"
                    placeholder="Write Your UserID"
                    required
                  />
                </div>
                <div className="form-group ">
                  <label Htmlfor="benid">Previous Password</label>
                  <input
                    onChange={(e) =>
                        setupdatebeneficiary({ ...updatebeneficiary, previousPassword: e.target.value })
                    }
                    value={updatebeneficiary.previousPassword}
                    type="password"
                    className="form-control"
                    id="previouspassword"
                    placeholder="Write Your Previous Password"
                    required
                  />
                </div>
                <div className="form-group ">
                  <label Htmlfor="benid">New Password</label>
                  <input
                    onChange={(e) =>
                        setupdatebeneficiary({ ...updatebeneficiary, newPassword: e.target.value })
                    }
                    value={updatebeneficiary.newPassword}
                    type="password"
                    className="form-control"
                    id="newpassword"
                    placeholder="Write Your Previous Password"
                    required
                  />
                </div>
                <div className="form-group ">
                  <label Htmlfor="benid">Confirm Password</label>
                  <input
                    onChange={(e) =>
                        setupdatebeneficiary({ ...updatebeneficiary, confirmPassword: e.target.value })
                    }
                    value={updatebeneficiary.confirmPassword}
                    type="password"
                    className="form-control"
                    id="confirmpassword"
                    placeholder="Write Your Confirm Password"
                    required
                  />
                </div>
    
                </div>
                <button type="submit" class="btn btn-primary btn-sm my-3" onClick={updateUser}>
          <h7 id="loading"> Reset </h7>
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
