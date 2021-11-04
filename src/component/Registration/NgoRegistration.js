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

export  const NgoRegistration = () => {
  const paperStyle={padding :45,height:'300vh',width:400, margin:"70px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
  const [value, setValue] = React.useState('false');
    const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [ngo, setngo] = useState({

     ngoIdentificationNo : 0,
     name: null,
     ngoPanCardNo: null,
     pancardOwnerTrust: null,
     adharCardNo:0,
    purposeofTrust: null,
    ngoBankAccountNo: null,
   trustDeedRegistrationCertificate: null,
    form12A:  null,
    formTax80G: null,
     checkpayPrevious: false,
   transactionHistory:  null,
    targetAmount:  0.0,
     ngoEmail:null,
    recievedAmount: 0,
     profileImage: null,
    ngoStory: null,
     bankBranch:  null,
    ifscNo: null,
    address: null,
    phoneNo: 0,

  })
  const handlePancard=(e)=>{

    if(e.target.value.length === 10){
      document.getElementById("ngoPanCardNo").style.borderColor="green"
    }else{
      document.getElementById("ngoPanCardNo").style.borderColor="red"
  
    }
    setngo({ ...ngo, ngoPanCardNo : e.target.value })

  }
  const handleOwnerPanCard=(e)=>{
     if(e.target.value.length === 10){
      document.getElementById("pancardOwnerTrust").style.borderColor="green"
    }else{
      document.getElementById("pancardOwnerTrust").style.borderColor="red"
  
    }
     setngo({ ...ngo, pancardOwnerTrust : e.target.value })
  }
  const handleadharcard=(e)=>{

    if(e.target.value.length === 12){
      document.getElementById("adharCardNo").style.borderColor="green"
    }else{
      document.getElementById("adharCardNo").style.borderColor="red"
  
    }
    setngo({ ...ngo, adharCardNo : e.target.value })


  }
 

const  submitNgo=async()=>{
  if(document.getElementById("false").checked){
    setngo({ ...ngo, checkpayPrevious : false })
  }else{
    setngo({ ...ngo, checkpayPrevious : true})
  }
  axios
  .post("http://localhost:9009/api/NgoUser/v1/register",ngo)
  .then((response) => {
    if (response.status === 200) {
     console.log(response)
     
    }else{
      console.log(response)
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
      <h3 style={{"color":"black"}}className="text-center container my-2 pt-5">Ngo Signup</h3>
    
      <div id="login-column" className="col-md-6">
        <div id="login-box" className="col-md-12">
          <body>
  
              <h3 className="text-center text-info"></h3>
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                name
                </label>
                <br />
                <input
                onChange={(e) =>
                  setngo({ ...ngo, name : e.target.value })
                }
                value={ngo.name}
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div><br/>
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                ngoPanCardNo
                </label>
                <br />
                <input
                 onChange={handlePancard}
                //  (e) =>
                //   setngo({ ...ngo, ngoPanCardNo : e.target.value })
                // }
                value={ngo.ngoPanCardNo}
                  type="text"
                  id="ngoPanCardNo"
                  className="form-control"
                  placeholder="Ngo PanCardNo"
                  required
                />
              </div><br/>
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                Pancard of Applyer
                </label>
                <br />
                <input
                 onChange={handleOwnerPanCard}
                //  (e) =>
                //   setngo({ ...ngo, pancardOwnerTrust : e.target.value })
                // }
                value={ngo.pancardOwnerTrust}
                  type="text"
                  id="pancardOwnerTrust"
                  className="form-control"
                  placeholder="Provide PanCard No Of Owner"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                adharCardNo of Applyer
                </label>
                <br />
                <input
                 onChange={handleadharcard}
                //  (e) =>
                //   setngo({ ...ngo, adharCardNo : e.target.value })
                // }
                value={ngo.adharCardNo}
                  type="number"
                  id="adharCardNo"
                  className="form-control"
                  placeholder="Ngo Owner Adhar-Card No"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                Purpose of Your Trust
                </label>
                <br />
                <input
                 onChange={(e) =>
                  setngo({ ...ngo, purposeofTrust : e.target.value })
                }
                value={ngo.purposeofTrust}
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Purpose Of Trust"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                ngoBankAccountNo
                </label>
                <br />
                <input
                 onChange={ (e) =>
                  setngo({ ...ngo, ngoBankAccountNo : e.target.value })
                }
                value={ngo.ngoBankAccountNo}
                  type="number"
                  id=" ngoBankAccountNo"
                  className="form-control"
                  placeholder="Ngo Bank-Account No "
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                trustDeedRegistrationCertificate
                </label>
                <br />
                <input
                 onChange={(e) =>
                  setngo({ ...ngo, trustDeedRegistrationCertificate: e.target.value })
                }
                value={ngo.trustDeedRegistrationCertificate}
                  type="file"
                  id="trustDeedRegistrationCertificate"
                  className="form-control"
                  placeholder="Provide Your TrustDeed Registration Certificate"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                form12A of your Organization
                </label>
                <br />
                <input
                 onChange={(e) =>
                  setngo({ ...ngo, form12A : e.target.value })
                }
                value={ngo.form12A}
                  type="file"
                  id="form12A"
                  className="form-control"
                  placeholder="Provide"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                formTax80G of your organization
                </label>
                <br />
                <input
                 onChange={(e) =>
                  setngo({ ...ngo, formTax80G : e.target.value })
                }
                value={ngo.formTax80G}
                  type="file"
                  id="formTax80G"
                  className="form-control"
                  placeholder="Provide your formTax80G"
                  required
                />
              </div>
              <br />
              <FormControl component="fieldset">
      <FormLabel className="text-info" component="legend">Check Previous Pay</FormLabel>
      <RadioGroup
        aria-label="checkpreviouspay"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel id="false" value="false" control={<Radio />} label="False" />
        <FormControlLabel id="true" value="true" control={<Radio />} label="True" />
      </RadioGroup>
    </FormControl>
            
              <br />
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                Previous transaction History
                </label>
                <br />
                <input
                  onChange={(e) =>
                    setngo({ ...ngo, transactionHistory : e.target.value })
                  }
                  value={ngo.transactionHistory}
                  type="text"
                  id="transactionHistory"
                  className="form-control"
                  placeholder="Provide Your Transaction History"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                TargetAmount of Your Organization
                </label>
                <br />
                <input
                  onChange={(e) =>
                    setngo({ ...ngo, targetAmount : e.target.value })
                  }
                  value={ngo.targetAmount}
                  type="number"
                  id="TargetAmount"
                  className="form-control"
                  placeholder="Provide Your Target Amount of Your Organization"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                Ngo Email-ID
                </label>
                <br />
                <input
                  onChange={(e) =>
                    setngo({ ...ngo, ngoEmail: e.target.value })
                  }
                  value={ngo.ngoEmail}
                  type="email"
                  id="ngoEmailID"
                  className="form-control"
                  placeholder="Provide your Ngo Email-ID"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                recievedAmount
                </label>
                <br />
                <input
                  onChange={(e) =>
                    setngo({ ...ngo, recievedAmount : e.target.value })
                  }
                  value={ngo.recievedAmount}
                  type="number"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                  required
                  disabled
                />
              </div>
              <br />
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                 Raise-Case Image
                </label>
                <br />
                <input
                  onChange={(e) =>
                    setngo({ ...ngo, profileImage : e.target.value })
                  }
                  value={ngo.profileImage}
                  type="file"
                  id="profileImage"
                  className="form-control"
                  placeholder="Provide Images For your Raise-Case"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                ngoStory
                </label>
                <br />
                <input
                  onChange={(e) =>
                    setngo({ ...ngo, ngoStory : e.target.value })
                  }
                  value={ngo.ngoStory}
                  type="text"
                  id="ngoStory"
                  className="form-control"
                  placeholder="Provide Your details about RaiseCase"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                bankBranch
                </label>
                <br />
                <input
                  onChange={(e) =>
                    setngo({ ...ngo, bankBranch : e.target.value })
                  }
                  value={ngo.bankBranch}
                  type="text"
                  id="bankBranch"
                  className="form-control"
                  placeholder="Bank Branch Of Your Ngo"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                IfscNo
                </label>
                <br />
                <input
                  onChange={(e) =>
                    setngo({ ...ngo, ifscNo : e.target.value })
                  }
                  value={ngo.ifscNo}
                  type="text"
                  id="IfscNo"
                  className="form-control"
                  placeholder="Provide Your IFSC No of Your Bank-Branch"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                Address
                </label>
                <br />
                <input
                  onChange={(e) =>
                    setngo({ ...ngo, address: e.target.value })
                  }
                  value={ngo.address}
                  type="text"
                  id="address"
                  className="form-control"
                  placeholder="Provide Your Ngo Address"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label Htmlfor="name" className="text-info">
                phoneNo
                </label>
                <br />
                <input
                  onChange={(e) =>
                    setngo({ ...ngo, phoneNo : e.target.value })
                  }
                  value={ngo.phoneNo}
                  type="number"
                  id="phoneNo"
                  className="form-control"
                  placeholder="Provide Your Phone Number"
                  required
                />
              </div>
              <br />

              <div className="form-group">
                <Button type="submit" variant="contained" name="submit" onClick={submitNgo}>
                <h6 id="loading">  Submit </h6>
                </Button>
              </div>
          </body>
        </div>
      </div>
    </div>
  </div>
</div>
</>
        
    )
}