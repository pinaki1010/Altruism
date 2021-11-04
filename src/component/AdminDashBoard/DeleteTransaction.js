import React from 'react'
import  { useState } from "react";
import axios from "axios";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import { green } from '@mui/material/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@material-ui/core/colors';
import { Redirect } from "react-router";

export default function DeleteTransaction() {
    const avatarStyle={backgroundColor:'red'}
    const [value, setValue] = React.useState('false');
      const handleChange = (event) => {
      setValue(event.target.value);}
  const [updatebeneficiary, setupdatebeneficiary] = useState({

    transactionId:0,
  })
  const  updateUser=async()=>{
    axios
    .delete("http://localhost:9006/api/AdminUser/v1/deleteTransaction/"+updatebeneficiary.transactionId)
    .then((response) => {
      if (response.status === 200) {

        window.alert("You have Successfully Deleted Transaction")
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
          <h4 style={{"color":"black"}}className="text-center container my-2 pt-5">Delete Transaction</h4>
        
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <body>
            
              <div className="form-row  ">
                
                <div className="form-group ">
                  <label Htmlfor="benid"> transactionId</label>
                  <input
                    onChange={(e) =>
                        setupdatebeneficiary({ ...updatebeneficiary,  transactionId:e.target.value })
                    }
                    value={updatebeneficiary.transactionId}
                    type="number"
                    className="form-control"
                    id="transactionId"
                    placeholder="Write  transactionId Whom you want to delete"
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
