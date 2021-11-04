import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { BeneficiaryRegistration } from '../Registration/BeneficiaryRegistration';
import { NgoRegistration } from '../Registration/NgoRegistration';
import  { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { UserUi } from '../UserDashBoard/UserUi';
import { DonorUserUi } from '../DonorDashBoard/DonorUserUi';
import { NgoUserUi } from '../NgoDashBoard/NgoUserUi';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Login=()=>{
    const [value, setValue] = React.useState('User');
    const handleChange = (event) => {
    setValue(event.target.value);
  };
    const paperStyle={padding :20,height:'50vh',width:380, margin:"80px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const [customerId, setCustomerId] = useState("")
    const [password, setpassword] = useState("")
    const handleId=(e)=>{
        setCustomerId(e.target.value)
    }
    const handlePassword=(e)=>{
        setpassword(e.target.value)
    }
    var history=useHistory()
  
    const  submitUser=async()=>{
        if(value==="User"){
         if(customerId==="700896"){
                try
        {
       const data={
           uname:customerId,
           password:password
       }
       let response=await fetch("http://localhost:9006/login",
       {
          method:'POST',
          credentials:'include',
          headers:{
             
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Access-Control-Allow-Origin' : 'http://localhost:9006/'
        },
        body:JSON.stringify(data)
       
      })
      
          if(response.status==200)
          {
           
          
            
            sessionStorage.setItem("adminId",customerId)
              history.push("/AdminUserUi")
        
          }
          else{
            // showAlert("Invalid credentials", "warning");
            // document.getElementById('loading').innerHTML='Login'
            console.log("hello")
          }
        }
        catch(error){
        //   showAlert("Please try again", "warning");
        //   document.getElementById('loading').innerHTML='Login'
          console.log(error)
        } 
          
    }
    else{
            try
            {
           const data={
               uname:customerId,
               password:password
           }
           let response=await fetch("http://localhost:9007/login",
           {
              method:'POST',
              credentials:'include',
              headers:{
                 
                'Content-Type':'application/json',
                'Accept':'application/json',
                'Access-Control-Allow-Origin' : 'http://localhost:9007/'
            },
            body:JSON.stringify(data)
           
          })
          
              if(response.status==200)
              {
               
               
                
                sessionStorage.setItem("beneficiaryId",customerId)
                  history.push("/UserUi")
            
              }
              else{
                // showAlert("Invalid credentials", "warning");
                // document.getElementById('loading').innerHTML='Login'
                console.log("hello")
              }
            }
            catch(error){
            //   showAlert("Please try again", "warning");
            //   document.getElementById('loading').innerHTML='Login'
              console.log(error)
            } 
          
        }
    } 


        else if(value==="Donor"){
            try
    {
   const data={
       uname:customerId,
       password:password
   }
   let response=await fetch("http://localhost:9008/login",
   {
      method:'POST',
      credentials:'include',
      headers:{
         
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Access-Control-Allow-Origin' : 'http://localhost:9008/'
    },
    body:JSON.stringify(data)
   
  })
  
      if(response.status==200)
      {
       
    
        
        sessionStorage.setItem("donorId",customerId)
          history.push("/DonorUserUi")
    
      }
      else{
        // showAlert("Invalid credentials", "warning");
        // document.getElementById('loading').innerHTML='Login'
        console.log("hello")
      }
    }
    catch(error){
    //   showAlert("Please try again", "warning");
    //   document.getElementById('loading').innerHTML='Login'
      console.log(error)
    } 
        }



        else if(value==="Ngo"){
            
            try
            {
           const data={
               uname:customerId,
               password:password
           }
           let response=await fetch("http://localhost:9009/login",
           {
              method:'POST',
              credentials:'include',
              headers:{
                 
                'Content-Type':'application/json',
                'Accept':'application/json',
                'Access-Control-Allow-Origin' : 'http://localhost:9009/'
            },
            body:JSON.stringify(data)
           
          })
          
              if(response.status==200)
              {
               
                let data1=await response.text()
                
                sessionStorage.setItem("ngoId",customerId)
                  history.push("/NgoUserUi")
            
              }
              else{
                // showAlert("Invalid credentials", "warning");
                // document.getElementById('loading').innerHTML='Login'
                console.log("hello")
              }
            }
            catch(error){
            //   showAlert("Please try again", "warning");
            //   document.getElementById('loading').innerHTML='Login'
              console.log(error)
            } 
          
        }


    
 
}

 
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField id="userID" label='Username' placeholder='Enter username' fullWidth 
                required  
                onChange={handleId}
                value={customerId}/>
                <TextField id="password" label='Password' placeholder='Enter password' type='password' fullWidth required
                onChange={handlePassword}
                value={password}
                />
            
                <FormControl component="fieldset">
              <FormLabel className="text-black my-2" component="legend">Choose User</FormLabel>
             <RadioGroup
            aria-label="Choose User"
            name="controlled-radio-buttons-group"
            value={value}
           onChange={handleChange}
           row>
        <FormControlLabel id="User" value="User" control={<Radio />} label="User" />
        <FormControlLabel id="Donor" value="Donor" control={<Radio />} label="Donor" />
        <FormControlLabel id="Ngo" value="Ngo" control={<Radio />} label="Ngo" />
      </RadioGroup>
    </FormControl>
                 <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={submitUser}>Sign in</Button>
            </Paper>
        </Grid>
    )
}

export default Login