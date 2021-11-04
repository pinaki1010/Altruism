import React from 'react'
import  { useState } from "react";
import axios from "axios";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import { green } from '@mui/material/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteIcon from '@material-ui/icons/Delete';
import { red } from '@material-ui/core/colors';
import { Redirect } from "react-router";

export default function DeleteBeneficiary() {
    const avatarStyle={backgroundColor:'red'}
    const [value, setValue] = React.useState('false');
      const handleChange = (event) => {
      setValue(event.target.value);}
  const [updatebeneficiary, setupdatebeneficiary] = useState({

    beneficiaryId:0,
  })
  const  updateUser=async()=>{
    axios
    .delete("http://localhost:9006/api/AdminUser/v1/deleteBenefeciaryUser/"+updatebeneficiary.beneficiaryId)
    .then((response) => {
      if (response.status === 200) {

        window.alert("You have Successfully Deleted Beneficiary")
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
            <Avatar style={avatarStyle} sx={{ bgcolor: red[500] }} variant="rounded">
           <DeleteIcon/>
          </Avatar>
          <h4 style={{"color":"black"}}className="text-center container my-2 pt-5">Delete Beneficiary User</h4>
        
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <body>
            
              <div className="form-row  ">
                
                <div className="form-group ">
                  <label Htmlfor="benid">Beneficiary-ID</label>
                  <input
                    onChange={(e) =>
                        setupdatebeneficiary({ ...updatebeneficiary, beneficiaryId: e.target.value })
                    }
                    value={updatebeneficiary.beneficiaryId}
                    type="number"
                    className="form-control"
                    id="benID"
                    placeholder="Write Beneficiary Whom you want to donate"
                    required
                  />
                </div>

                </div>
                <button style={{"background-color": "#f44336"}} type="submit" class="btn btn-primary btn-sm my-3" onClick={updateUser}>
          <h7 id="loading"> Delete </h7>
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
