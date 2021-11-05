import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel'
import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import CardSingle from './CardSingle';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";





      const useStyles = makeStyles({
        gridContainer: {
          paddingLeft: "40px",
          paddingRight: "40px"
        }
      });
export default function MultiCarsouel() {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    const useStyles = makeStyles({
        gridContainer: {
          paddingLeft: "40px",
          paddingRight: "40px"
        }
      });
      const classes = useStyles();
      
      const [data, setData] = useState([]);

    const getData = async () => {
      try {
        let response = await fetch(
            "http://beneficiaryservice-env.eba-5dav2fqf.us-east-1.elasticbeanstalk.com/api/BeneficiaryUser/v1/TrendingList",
            // sessionStorage.getItem("customerId"),
          {
            method: "GET",
             credentials: "include",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              'Access-Control-Allow-Origin' : 'http://beneficiaryservice-env.eba-5dav2fqf.us-east-1.elasticbeanstalk.com/'
            },
          }
        );
        if (response.status === 200) {
          setData(await response.json());
            
        }
      } catch (error) {
        //Log ---
      }
    };
  
    useEffect(() => {
      getData();
    }, []);


  return(
   
      <>

      <h2 style={{"color":"black bold"}}className="text-center conatiner my-2 pt-5">Fundraising Cases on Altruism
</h2>
      <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
      {
        data.map((e)=>{
          return [
      <Grid item xs={12} sm={6} md={4}>
      <CardSingle 
      beneficiaryName={e.beneficiaryName}
      key={e.beneficiaryName}
      story={e.story}
      beneficaryID={e.beneficaryID}
      beneficiaryEmailID={e.beneficiaryEmailID}
      targetAmount={e.targetAmount}
      recievedAmount={e.recievedAmount}
      />

      </Grid>
          ]
        })
      }
  

    </Grid>  


    </>
  );
}
