import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import { green } from '@mui/material/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import  { useState } from "react";
import axios from "axios";


export  const BeneficiaryRegistration = () => {
  const paperStyle={padding :45,height:'300vh',width:400, margin:"70px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
  const [value, setValue] = React.useState('false');
    const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [benefiary, setbenefiary] = useState({

    beneficiaryName:null,
    beneficiaryEmailID: null,
    beneficaryPhoneNumber: 0,
    category: null,
    targetAmount:0,
    accountNumber: 0,
    ifscNumber:null,
    bankBranch: null,
    image: null,
    address: null,
    story:null,
    recievedAmount:0
  })
  const handleName=(e)=>{
    if(e.target.value.length<6 || e.target.value<16){
      document.getElementById("name").style.borderColor="red"
    }else{
      document.getElementById("name").style.borderColor="green"
    }
    setbenefiary({ ...benefiary, beneficiaryName: e.target.value })
  }
  const handleEmailID=(e)=>{
    if (
      /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(e.target.value) === true
    ) {
      document.getElementById("emailID").style.borderColor = "green";
    } else {
      document.getElementById("emailID").style.borderColor = "red";
    }
    setbenefiary({ ...benefiary, beneficiaryEmailID: e.target.value })
  }
  const handlePhoneNumber=(e)=>{
    if(e.target.value.length===10){
      document.getElementById("beneficaryPhoneNumber").style.borderColor="green"
     
    }else{
      document.getElementById("beneficaryPhoneNumber").style.borderColor="red"
    }
    setbenefiary({ ...benefiary, beneficaryPhoneNumber:e.target.value })

    }
    const handleTargetAmount=(e)=>{
      if(e.target.value < 0){
        document.getElementById("targetAmount").style.borderColor="red"
      }else{
        document.getElementById("targetAmount").style.borderColor="green" 
      }
      setbenefiary({ ...benefiary, targetAmount:e.target.value })
    }
    const handleAccountNumber=(e)=>{
      if(e.target.value.length === 11){
        document.getElementById("accountNumber").style.borderColor="green" 
      }
      else{
        document.getElementById("accountNumber").style.borderColor="red"
      }
      setbenefiary({ ...benefiary, accountNumber:e.target.value })
    }

  
  



const  submitUser=async()=>{
  axios
  .post("http://localhost:9007/api/BeneficiaryUser/v1/register",benefiary)
  .then((response) => {
    if (response.status === 200) {
     console.log(response)
     window.alert("You have Successfully Registered")
     
    }else{
      console.log(response)
      window.alert("OOOPS!! Please Again Fill the data")
    }
  })
 
  
} 


  return(
     
<>
<div>

   <div className="container shadow p-3 mb-5 bg-white rounded text-white"> 
    <div
      id="login-row"
      className="row justify-content-center align-items-center"
    >
        <Avatar style={avatarStyle} sx={{ bgcolor: green[500] }} variant="rounded">
        <AssignmentIcon />
      </Avatar>
      <h4 style={{"color":"black"}}className="text-center container my-2 pt-5">BeneficiaryRegistration Signup</h4>
    
      <div id="login-column" className="col-md-6">
        <div id="login-box" className="col-md-12">
          <body>
        
          <div className="form-row  ">
            
            <div className="form-group ">
              <label Htmlfor="email">beneficiaryName</label>
              <input
                onChange={handleName}
                //   setbenefiary({ ...benefiary, beneficiaryName: e.target.value })
                // }
                value={benefiary.beneficiaryName}
                type="text"
                className="form-control"
                id="name"
                placeholder="User Name"
                required
              />
            </div>

            <div className="form-group">
              <label Htmlfor="pandId">beneficiaryEmailID</label>
              <input
             onChange={handleEmailID}
            //  (e) =>
            //   setbenefiary({ ...benefiary, beneficiaryEmailID: e.target.value })
            //  }
            value={benefiary.beneficiaryEmailID}
                type="email"
                className="form-control"
                id="emailID"
                style={{ "text-transform": "uppercase" }}
                placeholder="User EmailID"
                required
              />
            </div>

            <div className="form-group ">
              <label Htmlfor="beneficaryPhoneNumber">beneficaryPhoneNumber</label>
              <input
              onChange={handlePhoneNumber}
              // (e) =>
              //   setbenefiary({ ...benefiary, beneficaryPhoneNumber: e.target.value })
              // }
              value={benefiary.beneficaryPhoneNumber}
                type="number"
                className="form-control"
                id="beneficaryPhoneNumber"
                maxlength="10"
                placeholder="PhoneNumber"
                required
              />
            </div>

            <div className="form-group ">
              <label Htmlfor="category">category</label>
              <input
              onChange={(e) =>
                setbenefiary({ ...benefiary, category: e.target.value })
              }
              value={benefiary.category}
                type="text"
                className="form-control"
                id="category"
                placeholder="category"
                required
              />
            </div>
           
              <div className="form-group ">
                <label Htmlfor="ifscCode">targetAmount</label>
                <input
                onChange={handleTargetAmount}
                // (e) =>
                //   setbenefiary({ ...benefiary,targetAmount: e.target.value })
                // }
                value={benefiary.targetAmount}
                  type="number"
                  className="form-control"
                  id="targetAmount"
                  placeholder="Target Amount"
                  required
                />
              </div>
              <div className="form-group">
                <label Htmlfor="accountNumber">accountNumber</label>
                <input
                onChange={handleAccountNumber}
                // (e) =>
                //   setbenefiary({ ...benefiary, accountNumber: e.target.value })
                // }
                value={benefiary.accountNumber}
                  type="number"
                  className="form-control"
                  id="accountNumber"
                  placeholder="Account Number"
                  required
                />
              </div>
        
            <div className="form-group">
              <label Htmlfor="ifscNumber">ifscNumber</label>
              <input
              onChange={(e) =>
                setbenefiary({ ...benefiary, ifscNumber: e.target.value })
              }
              value={benefiary.ifscNumber}
                type="text"
                className="form-control"
                id="ifscNumber"
                maxlength="11"
                placeholder="IFSC Number"
                required
              />
            </div>
            <div className="form-group">
              <label Htmlfor="bankBranch">bankBranch</label>
              <input
              onChange={(e) =>
                setbenefiary({ ...benefiary, bankBranch: e.target.value })
              }
              value={benefiary.bankBranch}
                type="text"
                className="form-control"
                id="bankBranch"
                placeholder="Bank Branch"
                required
              />
            </div>
            <div className="form-group">
              <label Htmlfor="image">image</label>
              <input
              onChange={(e) =>
                setbenefiary({ ...benefiary, image: e.target.value })
              }
              value={benefiary.image}
                type="file"
                className="form-control"
                id="image"
                placeholder="Image"
                required
              />
            </div>
            <div className="form-group">
              <label Htmlfor="address">address</label>
              <input
              onChange={(e) =>
                setbenefiary({ ...benefiary, address: e.target.value })
              }
              value={benefiary.address}
                type="text"
                className="form-control"
                id="address"
                placeholder="address"
                required
              />
            </div>
            <div className="form-group">
              <label Htmlfor="story">story</label>
              <input
              onChange={(e) =>
                setbenefiary({ ...benefiary, story: e.target.value })
              }
              value={benefiary.story}
                type="text"
                className="form-control"
                id="story"
                placeholder="story"
                height="20"
                required
              />
            </div>
            <div className="form-group">
              <label Htmlfor="recievedAmount">recievedAmount</label>
              <input
              onChange={(e) =>
                setbenefiary({ ...benefiary, recievedAmount: e.target.value })
              }
              value={benefiary.recievedAmount}
                type="text"
                className="form-control"
                id="recievedAmount"
                placeholder="recievedAmount"
                required
                disabled
              />
            </div>
          </div>
          <br />
          <button type="submit" class="btn btn-primary btn-sm my-3" onClick={submitUser}>
          <h7 id="loading">  Sign Up </h7>
          </button>
          </body>
        </div>
      </div>
    </div>
  </div>
</div>
</>
        
    )
}